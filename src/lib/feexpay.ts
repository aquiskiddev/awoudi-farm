/**
 * Client FeexPay minimal — paiement local Mobile Money (T-Money / Flooz).
 * Doc développeur : https://docs.feexpay.me
 *
 * Variables d'environnement requises (à ajouter sur Vercel une fois le
 * compte FeexPay créé, Settings > Environment Variables) :
 *  - FEEXPAY_SHOP_ID   : identifiant de la boutique (dashboard FeexPay)
 *  - FEEXPAY_API_TOKEN : clé API secrète (dashboard FeexPay, ne jamais
 *                         exposer côté client)
 *  - FEEXPAY_MODE      : "LIVE" ou "SANDBOX"
 */

const FEEXPAY_BASE_URL = "https://api.feexpay.me/api";

export type FeexpayNetwork = "TOGOCOM" | "MOOV"; // TOGOCOM = T-Money, MOOV = Flooz

interface InitiatePaymentParams {
  amount: number;
  phoneNumber: string;
  network: FeexpayNetwork;
  fullName: string;
  email?: string;
  motif?: string;
}

export async function initiateLocalPayment({
  amount,
  phoneNumber,
  network,
  fullName,
  email,
  motif,
}: InitiatePaymentParams) {
  const shopId = process.env.FEEXPAY_SHOP_ID;
  const token = process.env.FEEXPAY_API_TOKEN;

  if (!shopId || !token) {
    throw new Error(
      "FEEXPAY_SHOP_ID / FEEXPAY_API_TOKEN manquants — à configurer sur Vercel."
    );
  }

  const response = await fetch(`${FEEXPAY_BASE_URL}/transactions/public/${shopId}/pay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      amount,
      phoneNumber,
      network,
      fullname: fullName,
      email,
      motif,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Erreur FeexPay (${response.status}): ${text}`);
  }

  return response.json();
}

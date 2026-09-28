import { NextRequest, NextResponse } from "next/server";

/**
 * Endpoint appelé par FeexPay quand le statut d'un paiement change.
 * À déclarer dans le dashboard FeexPay comme "Callback URL" :
 * https://<ton-domaine>.vercel.app/api/feexpay/webhook
 *
 * Pour l'instant on se contente de logger — dès qu'une table
 * `orders` existe dans Supabase, on mettra à jour son statut ici
 * (reference -> status: "paid" / "failed").
 */
export async function POST(req: NextRequest) {
  const payload = await req.json();

  console.log("[feexpay webhook]", payload);

  // TODO une fois la table Supabase `orders` créée :
  // const { reference, status } = payload;
  // await supabase.from("orders").update({ status }).eq("feexpay_reference", reference);

  return NextResponse.json({ received: true });
}

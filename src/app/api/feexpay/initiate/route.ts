import { NextRequest, NextResponse } from "next/server";
import { initiateLocalPayment, type FeexpayNetwork } from "@/lib/feexpay";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, phoneNumber, network, fullName, email, motif } = body as {
      amount: number;
      phoneNumber: string;
      network: FeexpayNetwork;
      fullName: string;
      email?: string;
      motif?: string;
    };

    if (!amount || !phoneNumber || !network || !fullName) {
      return NextResponse.json(
        { error: "Champs manquants: amount, phoneNumber, network, fullName" },
        { status: 400 }
      );
    }

    const result = await initiateLocalPayment({
      amount,
      phoneNumber,
      network,
      fullName,
      email,
      motif,
    });

    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


import { Cl } from "@stacks/transactions";
import { tx } from "@hirosystems/clarinet-sdk";
import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();

describe("CCRF Exploit", () => {
  it("is protected from intermediary contracts", () => {
    const deployer = accounts.get("deployer")!;
    const beneficiary = accounts.get("wallet_1")!;
    const someone_else = accounts.get("wallet_2")!;
    console.log(`Beneficiary ${beneficiary}`)
    simnet.mineBlock([
      tx.callPublicFn("timelock-wallet-protected", "lock", [
        Cl.principal(beneficiary),
        Cl.uint(10),
        Cl.uint(10),
      ], deployer),
    ]);
    console.log(`Querying initial beneficiary`);
    let initial = simnet.callReadOnlyFn("timelock-wallet-protected", "whois-beneficiary", [], someone_else);
    console.log(`Beneficiary is ${Cl.prettyPrint(initial.result.value)}`)

    console.log(`Launching the attack`);
    // here the beneficiary calls the cool-nft-airdrop function on the malicious smart contract
    simnet.mineBlock([
      tx.callPublicFn("malicious", "less-cool-nft-airdrop", [
      ], beneficiary),
    ]);
    // now the beneficiary of the timelock-wallet has been updated to the attackers address
    let pwned = simnet.callReadOnlyFn("timelock-wallet-protected", "whois-beneficiary", [], someone_else);
    console.log(`Beneficiary is now ${Cl.prettyPrint(pwned.result.value)}`);
    expect(pwned.result.value).toBeSome(Cl.principal(beneficiary));
  })
});




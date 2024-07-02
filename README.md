# Cross-Contract Request Forgery Proof of Concept

This repo demonstates the CCRF attack against the [timelock-wallet](https://book.clarity-lang.org/ch08-01-time-locked-wallet.html) from the Clarity Book's examples.

## Contents

This repo is broken into two directories: contracts and tests.

### contracts

**timelock-wallet-insecure.clar** - an insecure implementation that is vulnerable to attack

**timelock-wallet-protected.clar** - a more secure implementation that restricts `contract-caller` to `tx-sender`

**malicious.clar** - the phishing contract used in the attack

### tests

**timelock-wallet-insecure.test.ts** - Demonstrates the CCRF attack against timelock-wallet

**timelock-wallet-protected.test.ts** - Demonstrates the protected contract blocks the attack.

## Running the PoC

The PoC takes the form of a unit tests. 

This repo uses clarinet and vitest. Make sure [clarinet is installed](https://docs.hiro.so/stacks/clarinet/installation).

Install dependencies

```bash
npm install
```

To run tests

```bash
npm test
```

Optionally the path to a specific test file can be given to run only that test

```bash
npm test tests/timelock-wallet-insecure.test.ts 
```
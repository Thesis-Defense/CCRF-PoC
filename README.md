# Cross-Contract Request Forgery Proof of Concept

This repo demonstates the CCRF attack against the [timelock-wallet](https://book.clarity-lang.org/ch08-01-time-locked-wallet.html) from the Clarity Book's examples.

## Contents

### contracts

timelock-wallet-insecure.clar - an insecure implementation that is vulnerable to attack

timelock-wallet-protected.clar - a more secure implementation that restricts `contract-caller` to `tx-sender`

### tests

This repo uses clarinet and vitest. So to run the tests first make sure clarinet and required node modules are installed.

To run tests:

```bash
npm test
```

Optionally the path to a specific test file can be given to run only that test

```bash
npm test tests/timelock-wallet-insecure.test.ts 
```

timelock-wallet-insecure.test.ts - Demonstrates the CCRF attack against timelock-wallet

timelock-wallet-protected.test.ts - Demonstrates the protected contract blocks the attack.






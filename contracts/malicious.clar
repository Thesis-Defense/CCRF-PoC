(define-public (cool-nft-airdrop)
    (ok (contract-call? .timelock-wallet-insecure bestow 'STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6))
)

(define-public (less-cool-nft-airdrop)
    (ok (contract-call? .timelock-wallet-protected bestow 'STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6))
)

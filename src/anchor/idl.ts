export type Dapp = {
  "address": "3J51b7AMJZxmenuKynRevytgmPRFF93BPZcRSH6VT6xV",
  "metadata": {
    "name": "dapp",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addWhitelistToken",
      "discriminator": [
        128,
        56,
        125,
        80,
        142,
        129,
        31,
        103
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "deleteWhitelistToken",
      "discriminator": [
        240,
        170,
        164,
        138,
        16,
        231,
        171,
        26
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "editWhitelistToken",
      "discriminator": [
        241,
        130,
        69,
        114,
        171,
        6,
        221,
        200
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "initMint",
      "discriminator": [
        126,
        176,
        233,
        16,
        66,
        117,
        209,
        125
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "createMintAccountArgs"
            }
          }
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintTokenWithBurn",
      "discriminator": [
        14,
        187,
        13,
        156,
        159,
        100,
        79,
        73
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintTokenWithBurn2022",
      "discriminator": [
        52,
        122,
        177,
        219,
        234,
        63,
        248,
        213
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "discriminator": [
        163,
        46,
        74,
        168,
        216,
        123,
        133,
        98
      ]
    },
    {
      "name": "whitelistToken",
      "discriminator": [
        179,
        42,
        207,
        134,
        155,
        42,
        77,
        114
      ]
    }
  ],
  "events": [
    {
      "name": "addWhiteListTokenEvent",
      "discriminator": [
        219,
        182,
        46,
        22,
        13,
        250,
        66,
        207
      ]
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "discriminator": [
        101,
        19,
        21,
        14,
        96,
        57,
        29,
        213
      ]
    },
    {
      "name": "editWhiteListTokenEvent",
      "discriminator": [
        60,
        213,
        209,
        136,
        205,
        201,
        172,
        2
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "notInitialized",
      "msg": "The contract was not initialized yet"
    },
    {
      "code": 6001,
      "name": "notAuthorized",
      "msg": "The current signer is not authorized as owner"
    },
    {
      "code": 6002,
      "name": "wrongTokenAddress",
      "msg": "The token address is wrong, please provide the correct token address"
    }
  ],
  "types": [
    {
      "name": "addWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "createMintAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "editWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistTokens",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "whitelistToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "globalStateSeed",
      "type": "bytes",
      "value": "[71, 76, 79, 66, 65, 76, 45, 83, 84, 65, 84, 69, 45, 83, 69, 69, 68]"
    }
  ]
};

export const IDL: Dapp = {
  "address": "3J51b7AMJZxmenuKynRevytgmPRFF93BPZcRSH6VT6xV",
  "metadata": {
    "name": "dapp",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addWhitelistToken",
      "discriminator": [
        128,
        56,
        125,
        80,
        142,
        129,
        31,
        103
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "deleteWhitelistToken",
      "discriminator": [
        240,
        170,
        164,
        138,
        16,
        231,
        171,
        26
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "editWhitelistToken",
      "discriminator": [
        241,
        130,
        69,
        114,
        171,
        6,
        221,
        200
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "initMint",
      "discriminator": [
        126,
        176,
        233,
        16,
        66,
        117,
        209,
        125
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "createMintAccountArgs"
            }
          }
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintTokenWithBurn",
      "discriminator": [
        14,
        187,
        13,
        156,
        159,
        100,
        79,
        73
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintTokenWithBurn2022",
      "discriminator": [
        52,
        122,
        177,
        219,
        234,
        63,
        248,
        213
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "discriminator": [
        163,
        46,
        74,
        168,
        216,
        123,
        133,
        98
      ]
    },
    {
      "name": "whitelistToken",
      "discriminator": [
        179,
        42,
        207,
        134,
        155,
        42,
        77,
        114
      ]
    }
  ],
  "events": [
    {
      "name": "addWhiteListTokenEvent",
      "discriminator": [
        219,
        182,
        46,
        22,
        13,
        250,
        66,
        207
      ]
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "discriminator": [
        101,
        19,
        21,
        14,
        96,
        57,
        29,
        213
      ]
    },
    {
      "name": "editWhiteListTokenEvent",
      "discriminator": [
        60,
        213,
        209,
        136,
        205,
        201,
        172,
        2
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "notInitialized",
      "msg": "The contract was not initialized yet"
    },
    {
      "code": 6001,
      "name": "notAuthorized",
      "msg": "The current signer is not authorized as owner"
    },
    {
      "code": 6002,
      "name": "wrongTokenAddress",
      "msg": "The token address is wrong, please provide the correct token address"
    }
  ],
  "types": [
    {
      "name": "addWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "createMintAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "editWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistTokens",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "whitelistToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "globalStateSeed",
      "type": "bytes",
      "value": "[71, 76, 79, 66, 65, 76, 45, 83, 84, 65, 84, 69, 45, 83, 69, 69, 68]"
    }
  ]
}


// export const idl: Dapp = {
//   "address": "3J51b7AMJZxmenuKynRevytgmPRFF93BPZcRSH6VT6xV",
//   "metadata": {
//     "name": "dapp",
//     "version": "0.1.0",
//     "spec": "0.1.0",
//     "description": "Created with Anchor"
//   },
//   "instructions": [
//     {
//       "name": "add_whitelist_token",
//       "discriminator": [
//         128,
//         56,
//         125,
//         80,
//         142,
//         129,
//         31,
//         103
//       ],
//       "accounts": [
//         {
//           "name": "authority",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "global_state",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   71,
//                   76,
//                   79,
//                   66,
//                   65,
//                   76,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "whitelist_token",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   87,
//                   72,
//                   73,
//                   84,
//                   69,
//                   76,
//                   73,
//                   83,
//                   84,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               },
//               {
//                 "kind": "arg",
//                 "path": "token_address"
//               }
//             ]
//           }
//         },
//         {
//           "name": "system_program",
//           "address": "11111111111111111111111111111111"
//         }
//       ],
//       "args": [
//         {
//           "name": "token_address",
//           "type": "pubkey"
//         },
//         {
//           "name": "amount",
//           "type": "u64"
//         },
//         {
//           "name": "div",
//           "type": "u64"
//         },
//         {
//           "name": "token_type",
//           "type": "bool"
//         }
//       ]
//     },
//     {
//       "name": "delete_whitelist_token",
//       "discriminator": [
//         240,
//         170,
//         164,
//         138,
//         16,
//         231,
//         171,
//         26
//       ],
//       "accounts": [
//         {
//           "name": "authority",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "global_state",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   71,
//                   76,
//                   79,
//                   66,
//                   65,
//                   76,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "whitelist_token",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   87,
//                   72,
//                   73,
//                   84,
//                   69,
//                   76,
//                   73,
//                   83,
//                   84,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               },
//               {
//                 "kind": "arg",
//                 "path": "token_address"
//               }
//             ]
//           }
//         },
//         {
//           "name": "system_program",
//           "address": "11111111111111111111111111111111"
//         }
//       ],
//       "args": [
//         {
//           "name": "token_address",
//           "type": "pubkey"
//         }
//       ]
//     },
//     {
//       "name": "edit_whitelist_token",
//       "discriminator": [
//         241,
//         130,
//         69,
//         114,
//         171,
//         6,
//         221,
//         200
//       ],
//       "accounts": [
//         {
//           "name": "authority",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "global_state",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   71,
//                   76,
//                   79,
//                   66,
//                   65,
//                   76,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "whitelist_token",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   87,
//                   72,
//                   73,
//                   84,
//                   69,
//                   76,
//                   73,
//                   83,
//                   84,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               },
//               {
//                 "kind": "arg",
//                 "path": "token_address"
//               }
//             ]
//           }
//         },
//         {
//           "name": "system_program",
//           "address": "11111111111111111111111111111111"
//         }
//       ],
//       "args": [
//         {
//           "name": "token_address",
//           "type": "pubkey"
//         },
//         {
//           "name": "amount",
//           "type": "u64"
//         },
//         {
//           "name": "div",
//           "type": "u64"
//         },
//         {
//           "name": "token_type",
//           "type": "bool"
//         }
//       ]
//     },
//     {
//       "name": "init_mint",
//       "discriminator": [
//         126,
//         176,
//         233,
//         16,
//         66,
//         117,
//         209,
//         125
//       ],
//       "accounts": [
//         {
//           "name": "payer",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "authority",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   77,
//                   73,
//                   78,
//                   84,
//                   45,
//                   65,
//                   85,
//                   84,
//                   72,
//                   79,
//                   82,
//                   73,
//                   84,
//                   89
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "mint",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "system_program",
//           "address": "11111111111111111111111111111111"
//         },
//         {
//           "name": "token_program",
//           "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
//         }
//       ],
//       "args": [
//         {
//           "name": "args",
//           "type": {
//             "defined": {
//               "name": "CreateMintAccountArgs"
//             }
//           }
//         }
//       ]
//     },
//     {
//       "name": "initialize",
//       "discriminator": [
//         175,
//         175,
//         109,
//         31,
//         13,
//         152,
//         155,
//         237
//       ],
//       "accounts": [
//         {
//           "name": "authority",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "global_state",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   71,
//                   76,
//                   79,
//                   66,
//                   65,
//                   76,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "system_program",
//           "address": "11111111111111111111111111111111"
//         }
//       ],
//       "args": []
//     },
//     {
//       "name": "mint_token_with_burn",
//       "discriminator": [
//         14,
//         187,
//         13,
//         156,
//         159,
//         100,
//         79,
//         73
//       ],
//       "accounts": [
//         {
//           "name": "payer",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "authority",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   77,
//                   73,
//                   78,
//                   84,
//                   45,
//                   65,
//                   85,
//                   84,
//                   72,
//                   79,
//                   82,
//                   73,
//                   84,
//                   89
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "mint",
//           "writable": true
//         },
//         {
//           "name": "global_state",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   71,
//                   76,
//                   79,
//                   66,
//                   65,
//                   76,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "mint_token_account",
//           "writable": true
//         },
//         {
//           "name": "extra_metas_account",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   101,
//                   120,
//                   116,
//                   114,
//                   97,
//                   45,
//                   97,
//                   99,
//                   99,
//                   111,
//                   117,
//                   110,
//                   116,
//                   45,
//                   109,
//                   101,
//                   116,
//                   97,
//                   115
//                 ]
//               },
//               {
//                 "kind": "account",
//                 "path": "mint"
//               }
//             ]
//           }
//         },
//         {
//           "name": "burn_mint",
//           "writable": true
//         },
//         {
//           "name": "burn_mint_token_account",
//           "writable": true
//         },
//         {
//           "name": "whitelist_token",
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   87,
//                   72,
//                   73,
//                   84,
//                   69,
//                   76,
//                   73,
//                   83,
//                   84,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               },
//               {
//                 "kind": "account",
//                 "path": "burn_mint"
//               }
//             ]
//           }
//         },
//         {
//           "name": "system_program",
//           "address": "11111111111111111111111111111111"
//         },
//         {
//           "name": "associated_token_program",
//           "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
//         },
//         {
//           "name": "token_2022_program",
//           "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
//         },
//         {
//           "name": "token_program",
//           "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//         }
//       ],
//       "args": [
//         {
//           "name": "amount",
//           "type": "u64"
//         }
//       ]
//     },
//     {
//       "name": "mint_token_with_burn2022",
//       "discriminator": [
//         52,
//         122,
//         177,
//         219,
//         234,
//         63,
//         248,
//         213
//       ],
//       "accounts": [
//         {
//           "name": "payer",
//           "writable": true,
//           "signer": true
//         },
//         {
//           "name": "authority",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   77,
//                   73,
//                   78,
//                   84,
//                   45,
//                   65,
//                   85,
//                   84,
//                   72,
//                   79,
//                   82,
//                   73,
//                   84,
//                   89
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "mint",
//           "writable": true
//         },
//         {
//           "name": "global_state",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   71,
//                   76,
//                   79,
//                   66,
//                   65,
//                   76,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           "name": "mint_token_account",
//           "writable": true
//         },
//         {
//           "name": "extra_metas_account",
//           "writable": true,
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   101,
//                   120,
//                   116,
//                   114,
//                   97,
//                   45,
//                   97,
//                   99,
//                   99,
//                   111,
//                   117,
//                   110,
//                   116,
//                   45,
//                   109,
//                   101,
//                   116,
//                   97,
//                   115
//                 ]
//               },
//               {
//                 "kind": "account",
//                 "path": "mint"
//               }
//             ]
//           }
//         },
//         {
//           "name": "burn_mint",
//           "writable": true
//         },
//         {
//           "name": "burn_mint_token_account",
//           "writable": true
//         },
//         {
//           "name": "whitelist_token",
//           "pda": {
//             "seeds": [
//               {
//                 "kind": "const",
//                 "value": [
//                   87,
//                   72,
//                   73,
//                   84,
//                   69,
//                   76,
//                   73,
//                   83,
//                   84,
//                   45,
//                   83,
//                   84,
//                   65,
//                   84,
//                   69,
//                   45,
//                   83,
//                   69,
//                   69,
//                   68
//                 ]
//               },
//               {
//                 "kind": "account",
//                 "path": "burn_mint"
//               }
//             ]
//           }
//         },
//         {
//           "name": "system_program",
//           "address": "11111111111111111111111111111111"
//         },
//         {
//           "name": "associated_token_program",
//           "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
//         },
//         {
//           "name": "token_2022_program",
//           "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
//         },
//         {
//           "name": "token_program",
//           "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
//         }
//       ],
//       "args": [
//         {
//           "name": "amount",
//           "type": "u64"
//         }
//       ]
//     }
//   ],
//   "accounts": [
//     {
//       "name": "GlobalState",
//       "discriminator": [
//         163,
//         46,
//         74,
//         168,
//         216,
//         123,
//         133,
//         98
//       ]
//     },
//     {
//       "name": "WhitelistToken",
//       "discriminator": [
//         179,
//         42,
//         207,
//         134,
//         155,
//         42,
//         77,
//         114
//       ]
//     }
//   ],
//   "events": [
//     {
//       "name": "AddWhiteListTokenEvent",
//       "discriminator": [
//         219,
//         182,
//         46,
//         22,
//         13,
//         250,
//         66,
//         207
//       ]
//     },
//     {
//       "name": "DeleteWhiteListTokenEvent",
//       "discriminator": [
//         101,
//         19,
//         21,
//         14,
//         96,
//         57,
//         29,
//         213
//       ]
//     },
//     {
//       "name": "EditWhiteListTokenEvent",
//       "discriminator": [
//         60,
//         213,
//         209,
//         136,
//         205,
//         201,
//         172,
//         2
//       ]
//     }
//   ],
//   "errors": [
//     {
//       "code": 6000,
//       "name": "NotInitialized",
//       "msg": "The contract was not initialized yet"
//     },
//     {
//       "code": 6001,
//       "name": "NotAuthorized",
//       "msg": "The current signer is not authorized as owner"
//     },
//     {
//       "code": 6002,
//       "name": "WrongTokenAddress",
//       "msg": "The token address is wrong, please provide the correct token address"
//     }
//   ],
//   "types": [
//     {
//       "name": "AddWhiteListTokenEvent",
//       "type": {
//         "kind": "struct",
//         "fields": [
//           {
//             "name": "authority",
//             "type": "pubkey"
//           },
//           {
//             "name": "whitelist_token",
//             "type": "pubkey"
//           },
//           {
//             "name": "mint",
//             "type": "pubkey"
//           },
//           {
//             "name": "amount",
//             "type": "u64"
//           },
//           {
//             "name": "div",
//             "type": "u64"
//           },
//           {
//             "name": "token_type",
//             "type": "bool"
//           }
//         ]
//       }
//     },
//     {
//       "name": "CreateMintAccountArgs",
//       "type": {
//         "kind": "struct",
//         "fields": [
//           {
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "name": "symbol",
//             "type": "string"
//           },
//           {
//             "name": "uri",
//             "type": "string"
//           }
//         ]
//       }
//     },
//     {
//       "name": "DeleteWhiteListTokenEvent",
//       "type": {
//         "kind": "struct",
//         "fields": [
//           {
//             "name": "authority",
//             "type": "pubkey"
//           },
//           {
//             "name": "whitelist_token",
//             "type": "pubkey"
//           }
//         ]
//       }
//     },
//     {
//       "name": "EditWhiteListTokenEvent",
//       "type": {
//         "kind": "struct",
//         "fields": [
//           {
//             "name": "authority",
//             "type": "pubkey"
//           },
//           {
//             "name": "whitelist_token",
//             "type": "pubkey"
//           },
//           {
//             "name": "mint",
//             "type": "pubkey"
//           },
//           {
//             "name": "amount",
//             "type": "u64"
//           },
//           {
//             "name": "div",
//             "type": "u64"
//           },
//           {
//             "name": "token_type",
//             "type": "bool"
//           }
//         ]
//       }
//     },
//     {
//       "name": "GlobalState",
//       "type": {
//         "kind": "struct",
//         "fields": [
//           {
//             "name": "initialized",
//             "type": "bool"
//           },
//           {
//             "name": "authority",
//             "type": "pubkey"
//           },
//           {
//             "name": "whitelist_tokens",
//             "type": {
//               "vec": "pubkey"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "name": "WhitelistToken",
//       "type": {
//         "kind": "struct",
//         "fields": [
//           {
//             "name": "mint",
//             "type": "pubkey"
//           },
//           {
//             "name": "amount",
//             "type": "u64"
//           },
//           {
//             "name": "div",
//             "type": "u64"
//           },
//           {
//             "name": "token_type",
//             "type": "bool"
//           }
//         ]
//       }
//     }
//   ],
//   "constants": [
//     {
//       "name": "GLOBAL_STATE_SEED",
//       "type": "bytes",
//       "value": "[71, 76, 79, 66, 65, 76, 45, 83, 84, 65, 84, 69, 45, 83, 69, 69, 68]"
//     }
//   ]
// }

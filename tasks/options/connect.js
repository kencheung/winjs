// Copyright (c) Microsoft Corporation.  All Rights Reserved. Licensed under the MIT License. See License.txt in the project root for license information.
"use strict";

module.exports = {
    localhostAuto: {
        options: {
            port: 9666,
            keepalive: true,
            open: {
                target: 'http://localhost:9666/bin/tests/tests.html?autostart=true'
            },
            hostname: 'localhost'
        }
    },
    localhost: {
        options: {
            port: 9666,
            keepalive: true,
            open: {
                target: 'http://localhost:9666/bin/tests/tests.html'
            },
            hostname: 'localhost'
        }
    },
    saucelabs: {
        options: {
            base: "",
            port: 9999,
            hostname: 'localhost'
        }
    },
    saucelabs1: {
        options: {
            base: "",
            port: 1024,
            hostname: 'localhost'
        }
    },
     saucelabs2: {
        options: {
            base: "",
            port: 1025,
            hostname: 'localhost'
        }
    },
     saucelabs3: {
        options: {
            base: "",
            port: 1026,
            hostname: 'localhost'
        }
    },
     saucelabs4: {
        options: {
            base: "",
            port: 1027,
            hostname: 'localhost'
        }
    },
     saucelabs5: {
        options: {
            base: "",
            port: 1028,
            hostname: 'localhost'
        }
    },
     saucelabs6: {
        options: {
            base: "",
            port: 1029,
            hostname: 'localhost'
        }
    },
     saucelabs7: {
        options: {
            base: "",
            port: 1030,
            hostname: 'localhost'
        }
    },
     saucelabs8: {
        options: {
            base: "",
            port: 1031,
            hostname: 'localhost'
        }
    },
     saucelabs9: {
        options: {
            base: "",
            port: 1032,
            hostname: 'localhost'
        }
    },
     saucelabs10: {
        options: {
            base: "",
            port: 1033,
            hostname: 'localhost'
        }
    },
    
    remote: {
        options: {
            port: 9666,
            keepalive: true,
            open: {
                target: 'http://localhost:9666/bin/tests/tests.html'
            },
            hostname: '*'
        }
    }
};
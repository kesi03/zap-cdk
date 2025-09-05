# zap-cdk
Create zap automation yaml using the awscdk constructs

## Maven
### Generate gpg key
```bash
gpg --full-generate-key
# select RSA only, 4096, passphrase
```
### export key
```bash
gpg -a --export $(gpg --list-keys --fingerprint | grep -A 1 'pub' | grep 'fingerprint' | awk '{print $3}' | head -n 1) > public.pem
```

### publish key
```bash
gpg2 --keyserver hkp://keyserver.ubuntu.com --send-keys $(gpg --list-keys --with-colons | grep '^pub' | awk -F':' '{print $5}' | head -n 1)
```

### get fingerprint
```bash
gpg --list-keys --with-colons | awk -F: '/^fpr:/{print $10; exit}'
```

### export private key
```bash
gpg --batch --passphrase 'cdk4Zap2025!' -a --export-secret-keys $(gpg --list-keys --with-colons | awk -F: '/^fpr:/{print $10; exit}') > private.pem

```
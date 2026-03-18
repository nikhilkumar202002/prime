#!/bin/bash
# Run this script while Figma Dev Mode is open with the Prime Promenade file.
# Downloads all Figma assets to ./assets/

mkdir -p assets
BASE="http://localhost:3845/assets"
SUCCESS=0; FAIL=0

download() {
  FILE="$1"
  HTTP=$(curl -s -o "assets/$FILE" -w "%{http_code}" "$BASE/$FILE")
  if [ "$HTTP" = "200" ]; then
    echo "✓ $FILE"; SUCCESS=$((SUCCESS+1))
  else
    echo "✗ $FILE (HTTP $HTTP)"; rm -f "assets/$FILE"; FAIL=$((FAIL+1))
  fi
}

# Logo & UI
download "461005f0a4b16024c738b9ceeae3cc0efc6a0a94.svg"
download "225e9961f88485e9827ea6247860c6d5a16d9a95.svg"
download "da4d45190e2637003c0d5f7afc82ad284288b554.svg"
download "5dadef43bf67c4d2d6147ea407c6ea06ea588657.svg"
download "9f6d2d76d1781ca18596c7b6eab1c23e95a5ba2b.svg"
download "538e67c6c0ed7721511ee5942dd82a348b8901fe.svg"
download "b0a7c5e9c88bc943be2c54afcf9142bed1a43bc9.svg"
# Hero / Four Floors
download "1bcc5c4d081472f10ce51878271b71a7182c1268.png"
download "421fba8ad9be007925e28b68595dd1e9801206b0.png"
download "31573c6eb4e2d6458be302ad6c5c8ef77abf46ce.png"
download "4cd4de5e688bee548fb61776ab7a8d5c0ada1349.png"
# Floor panels
download "54d69a57555e93494ff1bdfd04d20bfb6f541390.png"
download "32a0c53f9946cb8f184ce08811041cacbba40843.png"
download "f6c322b46d2c4af7e797fb99adc6c06396871088.png"
# Amenities
download "b2a57f7160f31f9330b103083aeec6adf3fdda9d.png"
download "28317ffb8bd0cfa481e561949c793bb65e533107.png"
download "9046ad16dc65d54dc8896ab41b22b24df3a3c150.png"
download "6f32f40e0175ae273ee579a3e5fa8dc789f7af36.png"
download "3b0fbeb4553c6eea235f24eb6a372e22b0718770.png"
# Transform / Fitness
download "060cc9853c06cfa47f94502c8517d564c50ff930.png"
# Built for Visionaries icons
download "bac6647dead1dcf8796d89548ad0d9030750c703.png"
download "609ac97b47e7ccf533a83e1838d32ea943c24c1f.png"
download "e9d0d569b260a460f66a5cd0f6436acd3100e83d.png"
download "79d71fe981328cf24207baf0ab5d971401991dbc.png"
download "456f2242cc66315851ca48ea1151bed122a71508.png"
# Events section
download "3fa0c2858a9883222e6043946c0974f99572a294.png"
download "a3ddcd321732f87c8a1ced84089f07f10544b498.png"
# Avatars
download "bccc84f152be39833770bb1625118a39508489ef.png"
download "29aa100af6d99d46902df7c09b2eead27d5d58d0.png"
download "78ad0655e47e0e880a4eab9e038c9fe72e2d3555.png"
download "cde7431ea7d5385827e0d5281f5ea19942faa61f.png"

echo ""
echo "Done: $SUCCESS downloaded, $FAIL failed."
[ $FAIL -gt 0 ] && echo "→ Open the Prime Promenade file in Figma Dev Mode and re-run."

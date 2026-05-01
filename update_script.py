import os

path = os.path.expanduser('~/deploy_terrilium/public/index.html')
with open(path, 'r') as f:
    content = f.read()

# On définit l'URL de ton Google Script
new_url = "https://script.google.com/macros/s/AKfycbylXw93k3LPkM0gNOIm0hLiDP99qC2sDy3MY-P-eRld38qDTD6FSoeo-eQfH3Fq51Qk/exec"

# Remplacement chirurgical de la variable
import re
content = re.sub(r'const webhookUrl = ".*";', f'const webhookUrl = "{new_url}";', content)
content = re.sub(r"const webhookUrl = '.*';", f'const webhookUrl = "{new_url}";', content)

with open(path, 'w') as f:
    f.write(content)

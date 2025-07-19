import subprocess

def call_js_event(position):
cmd = ["node", "index.js"]
result = subprocess.run(cmd, capture_output=True, text=True)
print(result.stdout)

if name == "main":
call_js_event(0)

# SEC-11: SSTI — Server-Side Template Injection
# Test: TC-CR-017
from flask import render_template_string

def render_user_content(template):
    return render_template_string(template)

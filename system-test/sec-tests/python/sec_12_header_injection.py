# SEC-12: Header Injection / CRLF
# Test: TC-CR-018
def set_redirect(response, redirect_url):
    response.setHeader("Location", redirect_url)
    return response

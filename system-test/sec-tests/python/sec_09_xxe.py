# SEC-09: XXE — XML external entity injection
# Test: TC-CR-015
from lxml import etree

def parse_xml(user_xml):
    tree = etree.parse(user_xml)
    return tree.getroot()

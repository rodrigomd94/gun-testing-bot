This script is for testing vulnerabilities of the signature coordination using GUN.js. The script queries all transaction nodes from the gun db and replaces all signatures with random periodically. It also tries to "delete" all of the signers nodes for each transaction by replacing the value with null.
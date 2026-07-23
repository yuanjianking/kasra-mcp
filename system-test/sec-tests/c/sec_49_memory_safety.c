// SEC-49: Memory Safety — unsafe memory operations in C
// Test: TC-CR-053 (complementary)
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void buffer_overflow_gets() {
    char buf[64];
    printf("Enter your name: ");
    gets(buf);  // Buffer overflow — no bounds checking
    printf("Hello, %s\n", buf);
}

void buffer_overflow_strcpy() {
    char dest[10];
    char *src = "This string is way too long for the destination buffer";
    strcpy(dest, src);  // No bounds checking — overflows dest
}

void format_string_vuln() {
    char user_input[256];
    printf("Enter text: ");
    fgets(user_input, sizeof(user_input), stdin);
    printf(user_input);  // Format string vulnerability
}

void unsafe_sprintf() {
    char buffer[50];
    char *long_string = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    sprintf(buffer, "%s", long_string);  // No bounds checking
}

int main() {
    buffer_overflow_gets();
    buffer_overflow_strcpy();
    format_string_vuln();
    unsafe_sprintf();
    return 0;
}

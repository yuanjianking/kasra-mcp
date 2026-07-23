# Kasra AI 安全网关 — 代码/配置审查测试观点与文件映射

## 一、代码审查测试文件映射（SEC-01 ~ SEC-66）

### Python（42 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-05 | [python/sec_05_sql_injection.py](sec-tests/python/sec_05_sql_injection.py) | SQL 注入：字符串拼接查询 |
| SEC-07 | [python/sec_07_os_command.py](sec-tests/python/sec_07_os_command.py) | OS 命令注入（os.system） |
| SEC-08 | [python/sec_08_deserialization.py](sec-tests/python/sec_08_deserialization.py) | 不安全反序列化（pickle） |
| SEC-09 | [python/sec_09_xxe.py](sec-tests/python/sec_09_xxe.py) | XXE（lxml 外部实体） |
| SEC-10 | [python/sec_10_ldap_injection.py](sec-tests/python/sec_10_ldap_injection.py) | LDAP filter 注入 |
| SEC-11 | [python/sec_11_ssti.py](sec-tests/python/sec_11_ssti.py) | SSTI（render_template_string） |
| SEC-12 | [python/sec_12_header_injection.py](sec-tests/python/sec_12_header_injection.py) | Header Injection/CRLF |
| SEC-14 | [python/sec_14_code_injection.py](sec-tests/python/sec_14_code_injection.py) | eval 代码注入 |
| SEC-16 | [python/sec_16_cors.py](sec-tests/python/sec_16_cors.py) | CORS `*` + credentials |
| SEC-17 | [python/sec_17_csrf.py](sec-tests/python/sec_17_csrf.py) | CSRF 保护缺失 |
| SEC-18 | [python/sec_18_auth_missing.py](sec-tests/python/sec_18_auth_missing.py) | 身份认证缺失 |
| SEC-19 | [python/sec_19_ssrf.py](sec-tests/python/sec_19_ssrf.py) | SSRF（requests.get 用户 URL） |
| SEC-20 | [python/sec_20_open_redirect.py](sec-tests/python/sec_20_open_redirect.py) | 开放重定向 |
| SEC-21 | [python/sec_21_file_upload.py](sec-tests/python/sec_21_file_upload.py) | 无限制文件上传 |
| SEC-22 | [python/sec_22_idor.py](sec-tests/python/sec_22_idor.py) | IDOR 无所有权校验 |
| SEC-23 | [python/sec_23_lfi_rfi.py](sec-tests/python/sec_23_lfi_rfi.py) | LFI 本地文件包含 |
| SEC-24 | [python/sec_24_mass_assignment.py](sec-tests/python/sec_24_mass_assignment.py) | Mass Assignment |
| SEC-25 | [python/sec_25_jwt.py](sec-tests/python/sec_25_jwt.py) | JWT alg:none |
| SEC-26 | [python/sec_26_security_headers.py](sec-tests/python/sec_26_security_headers.py) | 缺安全响应头 |
| SEC-27 | [python/sec_27_session_management.py](sec-tests/python/sec_27_session_management.py) | 会话 ID 可预测（MD5） |
| SEC-28 | [python/sec_28_oauth.py](sec-tests/python/sec_28_oauth.py) | OAuth 缺 state/隐式授权 |
| SEC-30 | [python/sec_30_grpc.py](sec-tests/python/sec_30_grpc.py) | gRPC insecure_channel |
| SEC-32 | [python/sec_32_weak_crypto.py](sec-tests/python/sec_32_weak_crypto.py) | MD5 弱哈希 |
| SEC-33 | [python/sec_33_insecure_random.py](sec-tests/python/sec_33_insecure_random.py) | random 不安全随机数 |
| SEC-34 | [python/sec_34_tls_verify.py](sec-tests/python/sec_34_tls_verify.py) | TLS 验证禁用 |
| SEC-37 | [python/sec_37_debug_mode.py](sec-tests/python/sec_37_debug_mode.py) | DEBUG=True 生产环境 |
| SEC-38 | [python/sec_38_insecure_config.py](sec-tests/python/sec_38_insecure_config.py) | SECRET_KEY=changeme |
| SEC-40 | [python/requirements_cve.txt](sec-tests/python/requirements_cve.txt) | 已知 CVE 版本依赖 |
| SEC-42 | [python/sec_42_plaintext.py](sec-tests/python/sec_42_plaintext.py) | HTTP 明文通信 |
| SEC-43 | [python/sec_43_observability.py](sec-tests/python/sec_43_observability.py) | Actuator 端点泄露 |
| SEC-45 | [python/sec_45_path_traversal.py](sec-tests/python/sec_45_path_traversal.py) | 路径遍历（os.path.join） |
| SEC-46 | [python/sec_46_toctou.py](sec-tests/python/sec_46_toctou.py) | TOCTOU 竞态条件 |
| SEC-47 | [python/sec_47_resource_exhaustion.py](sec-tests/python/sec_47_resource_exhaustion.py) | 无限循环资源耗尽 |
| SEC-48 | [python/sec_48_zip_slip.py](sec-tests/python/sec_48_zip_slip.py) | Zip Slip（extractall） |
| SEC-50 | [python/sec_50_error_leak.py](sec-tests/python/sec_50_error_leak.py) | 错误信息泄露（str(e)） |
| SEC-51 | [python/sec_51_command_exec.py](sec-tests/python/sec_51_command_exec.py) | 命令执行（shell=True） |
| SEC-52 | [python/sec_52_log_injection.py](sec-tests/python/sec_52_log_injection.py) | 日志注入 |
| SEC-53 | [python/sec_53_int_overflow.py](sec-tests/python/sec_53_int_overflow.py) | 整数溢出 |
| SEC-55 | [python/sec_55_plaintext_password.py](sec-tests/python/sec_55_plaintext_password.py) | 明文密码存储 |
| SEC-56 | [python/sec_56_weak_password_policy.py](sec-tests/python/sec_56_weak_password_policy.py) | MIN_LENGTH=4 弱策略 |
| SEC-57 | [python/sec_57_audit_log.py](sec-tests/python/sec_57_audit_log.py) | DELETE users 缺审计 |
| SEC-58 | [python/sec_58_brute_force.py](sec-tests/python/sec_58_brute_force.py) | 登录缺速率限制 |
| SEC-59 | [python/sec_59_soft_delete.py](sec-tests/python/sec_59_soft_delete.py) | 软删除残留数据未清理 |

### Java（48 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-01 | [java/Sec01HardcodedCreds.java](sec-tests/java/Sec01HardcodedCreds.java) | 硬编码 AWS/GitHub/Stripe 凭证 |
| SEC-02 | [java/Sec02ConnectionString.java](sec-tests/java/Sec02ConnectionString.java) | JDBC 硬编码连接串（MySQL/PG） |
| SEC-03 | [java/Sec03CryptoKeys.java](sec-tests/java/Sec03CryptoKeys.java) | 硬编码 AES/JWT/HMAC 密钥 |
| SEC-04 | [java/Sec04TestCredentials.java](sec-tests/java/Sec04TestCredentials.java) | 遗留测试凭据（password123） |
| SEC-05 | [java/Sec05SqlInjection.java](sec-tests/java/Sec05SqlInjection.java) | SQL 注入字符串拼接 |
| SEC-06 | [java/Sec06NoSqlInjection.java](sec-tests/java/Sec06NoSqlInjection.java) | NoSQL $ne 注入 |
| SEC-07 | [java/Sec07OsCommand.java](sec-tests/java/Sec07OsCommand.java) | OS 命令注入 Runtime.exec |
| SEC-08 | [java/Sec08Deserialization.java](sec-tests/java/Sec08Deserialization.java) | ObjectInputStream 反序列化 |
| SEC-09 | [java/Sec09Xxe.java](sec-tests/java/Sec09Xxe.java) | XXE XML 外部实体 |
| SEC-10 | [java/Sec10LdapInjection.java](sec-tests/java/Sec10LdapInjection.java) | LDAP filter 注入 |
| SEC-11 | [java/Sec11Ssti.java](sec-tests/java/Sec11Ssti.java) | SSTI FreeMarker 模板注入 |
| SEC-12 | [java/Sec12HeaderInjection.java](sec-tests/java/Sec12HeaderInjection.java) | Header Injection/CRLF |
| SEC-14 | [java/Sec14CodeInjection.java](sec-tests/java/Sec14CodeInjection.java) | Runtime.exec 代码注入 |
| SEC-16 | [java/Sec16Cors.java](sec-tests/java/Sec16Cors.java) | CORS `*` + credentials |
| SEC-17 | [java/Sec17Csrf.java](sec-tests/java/Sec17Csrf.java) | Spring Security CSRF 禁用 |
| SEC-18 | [java/Sec18AuthMissing.java](sec-tests/java/Sec18AuthMissing.java) | REST 端点缺认证 |
| SEC-19 | [java/Sec19Ssrf.java](sec-tests/java/Sec19Ssrf.java) | SSRF URL 未验证 |
| SEC-20 | [java/Sec20OpenRedirect.java](sec-tests/java/Sec20OpenRedirect.java) | sendRedirect 开放重定向 |
| SEC-21 | [java/Sec21FileUpload.java](sec-tests/java/Sec21FileUpload.java) | 无限制文件上传 |
| SEC-22 | [java/Sec22Idor.java](sec-tests/java/Sec22Idor.java) | IDOR 无所有权校验 |
| SEC-23 | [java/Sec23FileInclusion.java](sec-tests/java/Sec23FileInclusion.java) | LFI Files.readAllBytes |
| SEC-24 | [java/Sec24MassAssignment.java](sec-tests/java/Sec24MassAssignment.java) | Mass Assignment 无白名单 |
| SEC-25 | [java/Sec25Jwt.java](sec-tests/java/Sec25Jwt.java) | JWT alg:none / 弱密钥 |
| SEC-26 | [java/Sec26SecurityHeaders.java](sec-tests/java/Sec26SecurityHeaders.java) | 缺安全响应头 |
| SEC-27 | [java/Sec27SessionManagement.java](sec-tests/java/Sec27SessionManagement.java) | 会话超时过长/缺安全标记 |
| SEC-28 | [java/Sec28OAuth.java](sec-tests/java/Sec28OAuth.java) | OAuth 缺 state/隐式授权 |
| SEC-32 | [java/Sec32WeakCrypto.java](sec-tests/java/Sec32WeakCrypto.java) | MD5/SHA-1 弱哈希 |
| SEC-33 | [java/Sec33InsecureRandom.java](sec-tests/java/Sec33InsecureRandom.java) | java.util.Random  |
| SEC-34 | [java/Sec34TlsVerify.java](sec-tests/java/Sec34TlsVerify.java) | TLS 验证禁用 |
| SEC-35 | [java/Sec35CertStorage.java](sec-tests/java/Sec35CertStorage.java) | 主机名验证跳过 |
| SEC-37 | [java/Sec37DebugMode.java](sec-tests/java/Sec37DebugMode.java) | Debug 模式堆栈泄露 |
| SEC-38 | [java/Sec38InsecureConfig.java](sec-tests/java/Sec38InsecureConfig.java) | 不安全默认配置 |
| SEC-42 | [java/Sec42Plaintext.java](sec-tests/java/Sec42Plaintext.java) | HTTP 明文通信 |
| SEC-43 | [java/Sec43Observability.java](sec-tests/java/Sec43Observability.java) | Actuator 暴露环境变量 |
| SEC-45 | [java/Sec45PathTraversal.java](sec-tests/java/Sec45PathTraversal.java) | 路径遍历 |
| SEC-46 | [java/Sec46TocTou.java](sec-tests/java/Sec46TocTou.java) | TOCTOU 竞态条件 |
| SEC-47 | [java/Sec47ResourceExhaustion.java](sec-tests/java/Sec47ResourceExhaustion.java) | 无限线程资源耗尽 |
| SEC-48 | [java/Sec48ZipSlip.java](sec-tests/java/Sec48ZipSlip.java) | Zip Slip 无路径校验 |
| SEC-50 | [java/Sec50ErrorLeak.java](sec-tests/java/Sec50ErrorLeak.java) | 错误信息泄露堆栈 |
| SEC-51 | [java/Sec51CommandExec.java](sec-tests/java/Sec51CommandExec.java) | sh -c 命令执行 |
| SEC-52 | [java/Sec52LogInjection.java](sec-tests/java/Sec52LogInjection.java) | 日志注入 |
| SEC-53 | [java/Sec53IntOverflow.java](sec-tests/java/Sec53IntOverflow.java) | 整数溢出/下溢 |
| SEC-54 | [java/Sec54NullPointer.java](sec-tests/java/Sec54NullPointer.java) | NullPointerException |
| SEC-55 | [java/Sec55PlaintextPassword.java](sec-tests/java/Sec55PlaintextPassword.java) | 明文密码存储 |
| SEC-56 | [java/Sec56WeakPasswordPolicy.java](sec-tests/java/Sec56WeakPasswordPolicy.java) | 密码策略 MIN_LENGTH=4 |
| SEC-57 | [java/Sec57AuditLog.java](sec-tests/java/Sec57AuditLog.java) | DELETE 缺审计日志 |
| SEC-58 | [java/Sec58BruteForce.java](sec-tests/java/Sec58BruteForce.java) | 登录缺速率限制 |
| SEC-59 | [java/Sec59SoftDelete.java](sec-tests/java/Sec59SoftDelete.java) | 软删除残留数据 |
| SEC-60 | [java/Sec60WebViewInsecure.java](sec-tests/java/Sec60WebViewInsecure.java) | WebView JS+file:// RCE 风险 |
| SEC-61 | [java/Sec61LocalStorage.java](sec-tests/java/Sec61LocalStorage.java) | SharedPreferences 明文存储 token |
| SEC-62 | [java/Sec62DeepLinkHijack.java](sec-tests/java/Sec62DeepLinkHijack.java) | Deep Link 自动登录无验证 |
| SEC-63 | [java/Sec63BackupLeak.java](sec-tests/java/Sec63BackupLeak.java) | allowBackup 无限制备份 |
| SEC-64 | [java/Sec64CertPinningMissing.java](sec-tests/java/Sec64CertPinningMissing.java) | OkHttpClient 缺 CertificatePinner |
| SEC-65 | [java/Sec65ScreenshotLeak.java](sec-tests/java/Sec65ScreenshotLeak.java) | 支付页面缺 FLAG_SECURE |
| SEC-66 | [java/Sec66ClipboardLeak.java](sec-tests/java/Sec66ClipboardLeak.java) | 密码复制到剪贴板无通知 |

### JavaScript（51 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-01 | [javascript/sec_01_cloud_creds.js](sec-tests/javascript/sec_01_cloud_creds.js) | 硬编码 AWS/GitHub/Stripe 凭证 |
| SEC-02 | [javascript/sec_02_connection_string.js](sec-tests/javascript/sec_02_connection_string.js) | MongoDB/PG/Redis 连接串 |
| SEC-03 | [javascript/sec_03_crypto_keys.js](sec-tests/javascript/sec_03_crypto_keys.js) | JWT/AES/HMAC 密钥 |
| SEC-04 | [javascript/sec_04_test_creds.js](sec-tests/javascript/sec_04_test_creds.js) | 遗留测试凭据 |
| SEC-05 | [javascript/sec_05_sql_injection.js](sec-tests/javascript/sec_05_sql_injection.js) | MySQL 字符串插值 SQL 注入 |
| SEC-06 | [javascript/sec_06_nosql_injection.js](sec-tests/javascript/sec_06_nosql_injection.js) | $ne NoSQL 注入 |
| SEC-07 | [javascript/sec_07_os_command.js](sec-tests/javascript/sec_07_os_command.js) | OS 命令注入（exec） |
| SEC-08 | [javascript/sec_08_deserialization.js](sec-tests/javascript/sec_08_deserialization.js) | node-serialize 反序列化 |
| SEC-10 | [javascript/sec_10_ldap_injection.js](sec-tests/javascript/sec_10_ldap_injection.js) | LDAP filter 注入 |
| SEC-12 | [javascript/sec_12_header_injection.js](sec-tests/javascript/sec_12_header_injection.js) | CRLF Header Injection |
| SEC-13 | [javascript/sec_13_prototype_pollution.js](sec-tests/javascript/sec_13_prototype_pollution.js) | _.merge 原型污染 |
| SEC-14 | [javascript/sec_14_eval.js](sec-tests/javascript/sec_14_eval.js) | eval 代码注入 |
| SEC-15 | [javascript/sec_15_xss.js](sec-tests/javascript/sec_15_xss.js) | XSS innerHTML 注入 |
| SEC-16 | [javascript/sec_16_cors.js](sec-tests/javascript/sec_16_cors.js) | CORS `*` + credentials |
| SEC-17 | [javascript/sec_17_csrf.js](sec-tests/javascript/sec_17_csrf.js) | CSRF 保护缺失 |
| SEC-18 | [javascript/sec_18_auth_missing.js](sec-tests/javascript/sec_18_auth_missing.js) | 身份认证缺失 |
| SEC-19 | [javascript/sec_19_ssrf.js](sec-tests/javascript/sec_19_ssrf.js) | axios.get 用户 URL |
| SEC-20 | [javascript/sec_20_open_redirect.js](sec-tests/javascript/sec_20_open_redirect.js) | 开放重定向 |
| SEC-21 | [javascript/sec_21_file_upload.js](sec-tests/javascript/sec_21_file_upload.js) | 无限制文件上传 |
| SEC-22 | [javascript/sec_22_idor.js](sec-tests/javascript/sec_22_idor.js) | IDOR 无权限校验 |
| SEC-23 | [javascript/sec_23_lfi.js](sec-tests/javascript/sec_23_lfi.js) | LFI readFileSync |
| SEC-24 | [javascript/sec_24_mass_assignment.js](sec-tests/javascript/sec_24_mass_assignment.js) | Mass Assignment |
| SEC-25 | [javascript/sec_25_jwt.js](sec-tests/javascript/sec_25_jwt.js) | JWT alg:none/无验证 |
| SEC-26 | [javascript/sec_26_security_headers.js](sec-tests/javascript/sec_26_security_headers.js) | 缺安全响应头 |
| SEC-27 | [javascript/sec_27_session_management.js](sec-tests/javascript/sec_27_session_management.js) | Session 弱密钥/缺 Secure |
| SEC-28 | [javascript/sec_28_oauth.js](sec-tests/javascript/sec_28_oauth.js) | OAuth 缺 state 参数 |
| SEC-29 | [javascript/sec_29_websocket.js](sec-tests/javascript/sec_29_websocket.js) | ws:// 非加密 WebSocket |
| SEC-31 | [javascript/sec_31_graphql.js](sec-tests/javascript/sec_31_graphql.js) | GraphQL introspection 启用 |
| SEC-32 | [javascript/sec_32_weak_crypto.js](sec-tests/javascript/sec_32_weak_crypto.js) | MD5/SHA-1 弱哈希 |
| SEC-33 | [javascript/sec_33_insecure_random.js](sec-tests/javascript/sec_33_insecure_random.js) | Math.random() 不安全随机数 |
| SEC-34 | [javascript/sec_34_tls.js](sec-tests/javascript/sec_34_tls.js) | NODE_TLS_REJECT_UNAUTHORIZED |
| SEC-35 | [javascript/sec_35_cert_storage.js](sec-tests/javascript/sec_35_cert_storage.js) | rejectUnauthorized=false |
| SEC-37 | [javascript/sec_37_debug.js](sec-tests/javascript/sec_37_debug.js) | Debug 堆栈泄露 |
| SEC-38 | [javascript/sec_38_insecure_config.js](sec-tests/javascript/sec_38_insecure_config.js) | secretKey=changeme |
| SEC-39 | [javascript/sec_39_dep_confusion.js](sec-tests/javascript/sec_39_dep_confusion.js) | 依赖混淆 |
| SEC-40 | [javascript/sec_40_cve_deps.js](sec-tests/javascript/sec_40_cve_deps.js) | 已知 CVE 依赖 |
| SEC-42 | [javascript/sec_42_plaintext.js](sec-tests/javascript/sec_42_plaintext.js) | HTTP 明文通信 |
| SEC-43 | [javascript/sec_43_observability.js](sec-tests/javascript/sec_43_observability.js) | process.env 端点泄露 |
| SEC-45 | [javascript/sec_45_path_traversal.js](sec-tests/javascript/sec_45_path_traversal.js) | path.join 路径遍历 |
| SEC-46 | [javascript/sec_46_toctou.js](sec-tests/javascript/sec_46_toctou.js) | TOCTOU 竞态条件 |
| SEC-47 | [javascript/sec_47_resource_exhaustion.js](sec-tests/javascript/sec_47_resource_exhaustion.js) | 无限循环资源耗尽 |
| SEC-48 | [javascript/sec_48_zip_slip.js](sec-tests/javascript/sec_48_zip_slip.js) | Zip Slip 提取 |
| SEC-50 | [javascript/sec_50_error_leak.js](sec-tests/javascript/sec_50_error_leak.js) | 错误堆栈泄露 |
| SEC-51 | [javascript/sec_51_command_exec.js](sec-tests/javascript/sec_51_command_exec.js) | execSync 命令执行 |
| SEC-52 | [javascript/sec_52_log_injection.js](sec-tests/javascript/sec_52_log_injection.js) | 日志注入 |
| SEC-53 | [javascript/sec_53_int_overflow.js](sec-tests/javascript/sec_53_int_overflow.js) | 整数溢出 |
| SEC-55 | [javascript/sec_55_plaintext_password.js](sec-tests/javascript/sec_55_plaintext_password.js) | 明文密码存储 |
| SEC-56 | [javascript/sec_56_weak_password_policy.js](sec-tests/javascript/sec_56_weak_password_policy.js) | MIN_LENGTH=4 |
| SEC-57 | [javascript/sec_57_audit_log.js](sec-tests/javascript/sec_57_audit_log.js) | DELETE 缺审计日志 |
| SEC-58 | [javascript/sec_58_brute_force.js](sec-tests/javascript/sec_58_brute_force.js) | 登录缺速率限制 |
| SEC-59 | [javascript/sec_59_soft_delete.js](sec-tests/javascript/sec_59_soft_delete.js) | 软删除残留数据 |

### TypeScript（50 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-01 | [typescript/sec_01_cloud_creds.ts](sec-tests/typescript/sec_01_cloud_creds.ts) | 硬编码 AWS 凭证 |
| SEC-02 | [typescript/sec_02_connection_string.ts](sec-tests/typescript/sec_02_connection_string.ts) | MongoDB/PG 连接串 |
| SEC-03 | [typescript/sec_03_crypto_keys.ts](sec-tests/typescript/sec_03_crypto_keys.ts) | 硬编码密钥 |
| SEC-04 | [typescript/sec_04_test_creds.ts](sec-tests/typescript/sec_04_test_creds.ts) | 遗留测试凭据 |
| SEC-05 | [typescript/sec_05_sql_injection.ts](sec-tests/typescript/sec_05_sql_injection.ts) | SQL 注入 |
| SEC-06 | [typescript/sec_06_nosql_injection.ts](sec-tests/typescript/sec_06_nosql_injection.ts) | NoSQL $ne 注入 |
| SEC-07 | [typescript/sec_07_os_command.ts](sec-tests/typescript/sec_07_os_command.ts) | OS 命令注入 |
| SEC-08 | [typescript/sec_08_deserialization.ts](sec-tests/typescript/sec_08_deserialization.ts) | 不安全反序列化 |
| SEC-10 | [typescript/sec_10_ldap_injection.ts](sec-tests/typescript/sec_10_ldap_injection.ts) | LDAP 注入 |
| SEC-13 | [typescript/sec_13_prototype_pollution.ts](sec-tests/typescript/sec_13_prototype_pollution.ts) | 原型污染 |
| SEC-14 | [typescript/sec_14_eval.ts](sec-tests/typescript/sec_14_eval.ts) | eval/Function 注入 |
| SEC-15 | [typescript/sec_15_xss.ts](sec-tests/typescript/sec_15_xss.ts) | XSS |
| SEC-16 | [typescript/sec_16_cors.ts](sec-tests/typescript/sec_16_cors.ts) | CORS 配置错误 |
| SEC-17 | [typescript/sec_17_csrf.ts](sec-tests/typescript/sec_17_csrf.ts) | CSRF 保护缺失 |
| SEC-18 | [typescript/sec_18_auth_missing.ts](sec-tests/typescript/sec_18_auth_missing.ts) | 认证缺失 |
| SEC-19 | [typescript/sec_19_ssrf.ts](sec-tests/typescript/sec_19_ssrf.ts) | SSRF |
| SEC-20 | [typescript/sec_20_open_redirect.ts](sec-tests/typescript/sec_20_open_redirect.ts) | 开放重定向 |
| SEC-21 | [typescript/sec_21_file_upload.ts](sec-tests/typescript/sec_21_file_upload.ts) | 无限制上传 |
| SEC-22 | [typescript/sec_22_idor.ts](sec-tests/typescript/sec_22_idor.ts) | IDOR |
| SEC-23 | [typescript/sec_23_lfi.ts](sec-tests/typescript/sec_23_lfi.ts) | LFI |
| SEC-24 | [typescript/sec_24_mass_assignment.ts](sec-tests/typescript/sec_24_mass_assignment.ts) | Mass Assignment |
| SEC-25 | [typescript/sec_25_jwt.ts](sec-tests/typescript/sec_25_jwt.ts) | JWT 缺陷 |
| SEC-26 | [typescript/sec_26_security_headers.ts](sec-tests/typescript/sec_26_security_headers.ts) | 缺安全头 |
| SEC-27 | [typescript/sec_27_session.ts](sec-tests/typescript/sec_27_session.ts) | Session 缺陷 |
| SEC-28 | [typescript/sec_28_oauth.ts](sec-tests/typescript/sec_28_oauth.ts) | OAuth 缺陷 |
| SEC-29 | [typescript/sec_29_websocket.ts](sec-tests/typescript/sec_29_websocket.ts) | ws:// 非加密 |
| SEC-31 | [typescript/sec_31_graphql.ts](sec-tests/typescript/sec_31_graphql.ts) | GraphQL 安全 |
| SEC-32 | [typescript/sec_32_weak_crypto.ts](sec-tests/typescript/sec_32_weak_crypto.ts) | MD5 弱哈希 |
| SEC-33 | [typescript/sec_33_insecure_random.ts](sec-tests/typescript/sec_33_insecure_random.ts) | Math.random() |
| SEC-34 | [typescript/sec_34_tls.ts](sec-tests/typescript/sec_34_tls.ts) | TLS 禁用 |
| SEC-35 | [typescript/sec_35_cert_storage.ts](sec-tests/typescript/sec_35_cert_storage.ts) | 证书验证跳过 |
| SEC-37 | [typescript/sec_37_debug.ts](sec-tests/typescript/sec_37_debug.ts) | Debug 模式 |
| SEC-38 | [typescript/sec_38_insecure_config.ts](sec-tests/typescript/sec_38_insecure_config.ts) | 不安全默认配置 |
| SEC-39 | [typescript/sec_39_dep_confusion.ts](sec-tests/typescript/sec_39_dep_confusion.ts) | 依赖混淆 |
| SEC-40 | [typescript/sec_40_cve_deps.ts](sec-tests/typescript/sec_40_cve_deps.ts) | CVE 依赖 |
| SEC-42 | [typescript/sec_42_plaintext.ts](sec-tests/typescript/sec_42_plaintext.ts) | 明文通信 |
| SEC-43 | [typescript/sec_43_observability.ts](sec-tests/typescript/sec_43_observability.ts) | 可观测性泄露 |
| SEC-45 | [typescript/sec_45_path_traversal.ts](sec-tests/typescript/sec_45_path_traversal.ts) | 路径遍历 |
| SEC-46 | [typescript/sec_46_toctou.ts](sec-tests/typescript/sec_46_toctou.ts) | TOCTOU |
| SEC-47 | [typescript/sec_47_resource_exhaustion.ts](sec-tests/typescript/sec_47_resource_exhaustion.ts) | 资源耗尽 |
| SEC-48 | [typescript/sec_48_zip_slip.ts](sec-tests/typescript/sec_48_zip_slip.ts) | Zip Slip |
| SEC-50 | [typescript/sec_50_error_leak.ts](sec-tests/typescript/sec_50_error_leak.ts) | 错误泄露 |
| SEC-51 | [typescript/sec_51_command_exec.ts](sec-tests/typescript/sec_51_command_exec.ts) | 命令执行 |
| SEC-52 | [typescript/sec_52_log_injection.ts](sec-tests/typescript/sec_52_log_injection.ts) | 日志注入 |
| SEC-53 | [typescript/sec_53_int_overflow.ts](sec-tests/typescript/sec_53_int_overflow.ts) | 整数溢出 |
| SEC-55 | [typescript/sec_55_plaintext_password.ts](sec-tests/typescript/sec_55_plaintext_password.ts) | 明文密码 |
| SEC-56 | [typescript/sec_56_weak_password_policy.ts](sec-tests/typescript/sec_56_weak_password_policy.ts) | 弱密码策略 |
| SEC-57 | [typescript/sec_57_audit_log.ts](sec-tests/typescript/sec_57_audit_log.ts) | 缺审计日志 |
| SEC-58 | [typescript/sec_58_brute_force.ts](sec-tests/typescript/sec_58_brute_force.ts) | 暴力破解防御缺失 |
| SEC-59 | [typescript/sec_59_soft_delete.ts](sec-tests/typescript/sec_59_soft_delete.ts) | 软删除残留 |

### HTML（5 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-15 | [html/sec_15_xss.html](sec-tests/html/sec_15_xss.html) | innerHTML XSS |
| SEC-17 | [html/sec_17_csrf.html](sec-tests/html/sec_17_csrf.html) | CSRF Token 缺失 |
| SEC-26 | [html/sec_26_missing_headers.html](sec-tests/html/sec_26_missing_headers.html) | 缺 CSP/HSTS/XFO |
| SEC-26 | [html/sec_48_clickjacking.html](sec-tests/html/sec_48_clickjacking.html) | Clickjacking（缺 X-Frame-Options） |
| SEC-41 | [html/sec_41_sri_missing.html](sec-tests/html/sec_41_sri_missing.html) | CDN 缺 SRI integrity |

### Shell（5 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-02 | [shell/sec_02_connection_string.sh](sec-tests/shell/sec_02_connection_string.sh) | Shell 脚本连接串硬编码 |
| SEC-07 | [shell/sec_07_os_command.sh](sec-tests/shell/sec_07_os_command.sh) | Shell 命令注入 |
| SEC-36 | [shell/sec_36_ci_risks.sh](sec-tests/shell/sec_36_ci_risks.sh) | curl\|bash / 安全控制关闭 |
| SEC-51 | [shell/sec_51_command_exec.sh](sec-tests/shell/sec_51_command_exec.sh) | eval / 任意命令执行 |
| SEC-57 | [shell/sec_57_audit_log.sh](sec-tests/shell/sec_57_audit_log.sh) | 破坏操作缺审计日志 |

### C（1 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-49 | [c/sec_49_memory_safety.c](sec-tests/c/sec_49_memory_safety.c) | gets/strcpy/sprintf 缓冲区溢出 |

### YAML（6 个文件）

| SEC规则 | 测试文件 | 检测观点 |
|--------|---------|---------|
| SEC-16 | [yaml/sec_16_cors.yaml](sec-tests/yaml/sec_16_cors.yaml) | CORS 通配符 + credentials |
| SEC-37 | [yaml/sec_37_debug.yaml](sec-tests/yaml/sec_37_debug.yaml) | 配置中 Debug=1 |
| SEC-38 | [yaml/sec_38_insecure_config.yaml](sec-tests/yaml/sec_38_insecure_config.yaml) | 不安全默认配置值 |
| SEC-42 | [yaml/sec_42_plaintext.yaml](sec-tests/yaml/sec_42_plaintext.yaml) | HTTP 端口无 TLS |
| SEC-43 | [yaml/sec_43_observability.yaml](sec-tests/yaml/sec_43_observability.yaml) | Actuator 端点全暴露 |
| SEC-44 | [yaml/sec_44_cicd.yml](sec-tests/yaml/sec_44_cicd.yml) | CI/CD permissions:write-all |

---

## 二、配置审查测试文件映射（IAC-01 ~ IAC-17）

| 测试用例ID | IAC规则 | 测试文件 | 检测观点 |
|-----------|---------|---------|---------|
| TC-IAC-001 | IAC-01 | [iac-tests/docker/Dockerfile_insecure](iac-tests/docker/Dockerfile_insecure) | latest 标签 / root 用户 / ADD URL |
| TC-IAC-002 | IAC-02 | [iac-tests/docker/docker-compose-insecure.yml](iac-tests/docker/docker-compose-insecure.yml) | 0.0.0.0 绑定 / host 网络 / 明文 env |
| TC-IAC-003 | IAC-03 | [iac-tests/docker/docker-compose-privileged.yml](iac-tests/docker/docker-compose-privileged.yml) | privileged / cap_add SYS_ADMIN |
| TC-IAC-004 | IAC-01 | [iac-tests/docker/Dockerfile_user_root](iac-tests/docker/Dockerfile_user_root) | Node 容器以 root 运行 |
| TC-IAC-005 | IAC-02 | [iac-tests/docker/docker-compose-exposed-db.yml](iac-tests/docker/docker-compose-exposed-db.yml) | PG latest + 弱密码 + 端口暴露 |
| TC-IAC-006 | IAC-04 | [iac-tests/kubernetes/pod-privileged.yaml](iac-tests/kubernetes/pod-privileged.yaml) | 特权容器 / hostNetwork / 提权 |
| TC-IAC-007 | IAC-05 | [iac-tests/kubernetes/service-nodeport.yaml](iac-tests/kubernetes/service-nodeport.yaml) | NodePort / hostPath 挂载 |
| TC-IAC-008 | IAC-06 | [iac-tests/kubernetes/rbac-wildcard.yaml](iac-tests/kubernetes/rbac-wildcard.yaml) | 匿名用户 cluster-admin / 通配符 RBAC |
| TC-IAC-009 | IAC-07 | [iac-tests/kubernetes/secret-configmap-insecure.yaml](iac-tests/kubernetes/secret-configmap-insecure.yaml) | Opaque Secret / ConfigMap 含敏感信息 |
| TC-IAC-010 | IAC-06 | [iac-tests/kubernetes/rbac-wildcard.yaml](iac-tests/kubernetes/rbac-wildcard.yaml) | ClusterRole 通配符 verbs |
| TC-IAC-011 | IAC-08 | [iac-tests/terraform/s3_public.tf](iac-tests/terraform/s3_public.tf) | S3 acl=public-read |
| TC-IAC-012 | IAC-09 | [iac-tests/terraform/security_group_open.tf](iac-tests/terraform/security_group_open.tf) | 0.0.0.0/0 开放 22/3389/6379 |
| TC-IAC-013 | IAC-10 | [iac-tests/terraform/iam_wildcard.tf](iac-tests/terraform/iam_wildcard.tf) | IAM Action:\* / Principal:\* |
| TC-IAC-014 | IAC-11 | [iac-tests/terraform/backend_local.tf](iac-tests/terraform/backend_local.tf) | backend local / 无版本锁定 |
| TC-IAC-015 | IAC-12 | [iac-tests/ansible/playbook-insecure.yml](iac-tests/ansible/playbook-insecure.yml) | ansible_become_password 明文 / validate_certs=no |
| TC-IAC-016 | IAC-13 | [iac-tests/helm/values-insecure.yaml](iac-tests/helm/values-insecure.yaml) | image.tag=latest / 缺 securityContext |
| TC-IAC-017 | IAC-14 | [iac-tests/cloudformation/s3-public.yaml](iac-tests/cloudformation/s3-public.yaml) | S3 PublicRead / SG 0.0.0.0/0 |
| TC-IAC-018 | IAC-15 | [iac-tests/serverless/serverless-insecure.yml](iac-tests/serverless/serverless-insecure.yml) | auth:NONE / IAM Action:\* |
| TC-IAC-019 | IAC-17 | [iac-tests/serverless/lambda_env_vars.py](iac-tests/serverless/lambda_env_vars.py) | 环境变量明文密钥 |
| TC-IAC-020 | IAC-16 | [iac-tests/pulumi/Pulumi-insecure.yaml](iac-tests/pulumi/Pulumi-insecure.yaml) | 缺 encryptionSettings |

---

## 三、覆盖统计

### 代码审查（SEC）

| 语言 | 文件数 | 覆盖规则数 | 规则范围 |
|------|--------|-----------|---------|
| **Python** | 42 | 43 条 | SEC-05/07/08/09/10/11/12/14/16/17/18/19/20/21/22/23/24/25/26/27/28/30/32/33/34/37/38/40/42/43/45/46/47/48/50/51/52/53/55/56/57/58/59 |
| **Java** | 55 | 56 条 | SEC-01~66（不含 13/15/29/30/31/36/39/40/41/44/49） |
| **JavaScript** | 51 | 51 条 | SEC-01~59（不含 09/11/30/36/41/44/49/54/60~66） |
| **TypeScript** | 50 | 50 条 | SEC-01~59（不含 09/11/12/30/36/41/44/49/54/60~66） |
| **HTML** | 5 | 4 条 | SEC-15/17/26/41 |
| **Shell** | 5 | 5 条 | SEC-02/07/36/51/57 |
| **C** | 1 | 1 条 | SEC-49 |
| **YAML** | 6 | 6 条 | SEC-16/37/38/42/43/44 |

### 配置审查（IAC）

| IaC 工具 | 文件数 | 覆盖规则 | 规则范围 |
|----------|--------|---------|---------|
| **Docker** | 7 | IAC-01/02/03 | Dockerfile / docker-compose |
| **Kubernetes** | 9 | IAC-04/05/06/07 | Pod / Service / RBAC / Secret / NetworkPolicy |
| **Terraform** | 6 | IAC-08/09/10/11 | S3 / SG / IAM / Backend |
| **Ansible** | 1 | IAC-12 | Playbook |
| **Helm** | 2 | IAC-13 | values.yaml / 模板 |
| **CloudFormation** | 2 | IAC-14 | template.yaml / Lambda |
| **Serverless** | 2 | IAC-15/17 | serverless.yml / lambda |
| **Pulumi** | 1 | IAC-16 | Pulumi.yaml |

### IAC 新增补全文件

| 新增文件 | 填补的 IAC 规则 | 填补子模式 |
|---------|----------------|-----------|
| [iac-tests/docker/Dockerfile_no_healthcheck](iac-tests/docker/Dockerfile_no_healthcheck) | IAC-01 | 缺 HEALTHCHECK 指令 |
| [iac-tests/docker/Dockerfile_no_user](iac-tests/docker/Dockerfile_no_user) | IAC-01 | 无 USER 指令（默认 root） |
| [iac-tests/kubernetes/deployment-privileged.yaml](iac-tests/kubernetes/deployment-privileged.yaml) | IAC-03 | K8s Deployment 特权模式 + 未 drop capabilities |
| [iac-tests/kubernetes/networkpolicy-missing.yaml](iac-tests/kubernetes/networkpolicy-missing.yaml) | IAC-05 | 命名空间缺 NetworkPolicy 隔离 |
| [iac-tests/kubernetes/rbac-authenticated.yaml](iac-tests/kubernetes/rbac-authenticated.yaml) | IAC-06 | system:authenticated 组过度授权 |
| [iac-tests/terraform/s3_public_read_write.tf](iac-tests/terraform/s3_public_read_write.tf) | IAC-08 | acl=public-read-write（完全公开写） |
| [iac-tests/terraform/security_group_mongodb.tf](iac-tests/terraform/security_group_mongodb.tf) | IAC-09 | MongoDB 27017 端口 0.0.0.0/0 |
| [iac-tests/kubernetes/helm-template-privileged.yaml](iac-tests/kubernetes/helm-template-privileged.yaml) | IAC-13 | Helm 模板含 privileged securityContext |
| [iac-tests/cloudformation/lambda-outside-vpc.yaml](iac-tests/cloudformation/lambda-outside-vpc.yaml) | IAC-14 | Lambda 缺 VPC 配置 |

### IO 新增补全测试用例

| 新增用例 | 填补规则 | 填补子模式 |
|---------|---------|-----------|
| TC-IO-007-B/C/D | I-07 | OPENSSH / EC / PGP 三种私钥格式 |
| TC-IO-034-B/C | I-33 | hex 编码管道执行 / ROT13 编码混淆 |
| TC-IO-041-C/D | I-39 | Office AutoOpen 宏 / PDF 嵌入 JS |
| TC-IO-046-B/C/D | I-47 | 3 轮跨消息分割攻击（渐进累积） |
| TC-IO-056-B/C | I-53 | DNS nslookup 外泄 / webhook 外发 |

### 已移除（不在保留语言列表内）

| 规则 | 原因 | 原语言 |
|------|------|--------|
| — | 全部 193 条规则均已覆盖 | — |

_注：SEC-49 通过 C 文件、SEC-60~66 通过 Java 文件（Android 平台）已在当前语言列表中实现覆盖。_

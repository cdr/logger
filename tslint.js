{
	"rules": {
		"only-arrow-functions": true,
		"curly-statement-newlines": true,
		"no-block-padding": true,
		"adjacent-overload-signatures": true,
		"align": true,
		"await-promise": [true, "Thenable"],
		"class-name": true,
		"eofline": true,
		"import-spacing": true,
		"indent": [true, "tabs"],
		"no-angle-bracket-type-assertion": false,
		"no-bitwise": false,
		"no-any": true,
		"newline-before-return": true,
		"no-console": true,
		"no-duplicate-imports": true,
		"no-consecutive-blank-lines": true,
		"no-empty": true,
		"no-floating-promises": true,
		"no-return-await": true,
		"no-var-keyword": true,
		"no-trailing-whitespace": true,
		"no-redundant-jsdoc": true,
		"no-implicit-dependencies": false,
		"no-boolean-literal-compare": true,
		"prefer-readonly": true,
		"deprecation": true,
		"semicolon": true,
		"one-line": [
			true,
			"check-catch",
			"check-finally",
			"check-else",
			"check-whitespace",
			"check-open-brace"
		],
		"completed-docs": {
			"options": [
				true,
				"enums",
				"functions",
				"methods",
				"classes"
			],
			"severity": "warning"
		},
		"no-unused-expression": [
			true,
			"allow-fast-null-checks"
		],
		"curly": [
			true
		],
		"quotemark": [
			true,
			"double",
			"avoid-escape",
			"avoid-template"
		],
		"trailing-comma": [
			true,
			{
				"multiline": "always",
				"singleline": "never",
				"esSpecCompliant": true
			}
		],
		"space-before-function-paren": [
			false,
			"always"
		],
		"member-access": [
			true,
			"check-accessor",
			"check-constructor",
			"check-parameter-property"
		],
		"typedef": [
			true,
			"call-signature",
			"arrow-call-signature",
			"parameter",
			"property-declaration"
		]
	}
}

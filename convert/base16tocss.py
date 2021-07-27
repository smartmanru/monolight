import os
import sys

def convert_scheme2css(filename):

	themefile = open(filename, 'rt')
	base16 = themefile.read().splitlines()
	themefile.close()

	filename = os.path.basename(filename)
	cssfilename = 'base16-' + filename[:filename.rfind('.yaml')] + '.css'
	style = open(cssfilename, 'wt')
	for line in base16:
		line = line.lower()
		csscode = ''
		add = True

		if (line.startswith('scheme')):
			csscode = '/* Color Scheme %(value)s */'

		elif (line.startswith('author')):
			csscode = '/* by %(value)s */\n'

		elif (line.startswith('base00')):
			csscode = '.mlight-bg { background: #%(value)s; }'

		elif (line.startswith('base01')):
			csscode = '.mlight-strnum { color: #%(value)s; }'

		elif (line.startswith('base02')):
			csscode = \
			'.mlight-select::selection,\n' + \
			'.mlight-select::-moz-selection { background: #%(value)s; }'

		elif (line.startswith('base03')):
			csscode = '.mlight-comment { color: #%(value)s; }'

		elif (line.startswith('base04')):
			csscode = '.mlight-codepanel { background: #%(value)s; }'

		elif (line.startswith('base05')):
			csscode = \
			'.mlight-fg { color: #%(value)s; }\n' + \
			'.mlight-oper { color: #%(value)s; }'

		elif (line.startswith('base08')):
			csscode = \
			'.mlight-var { color: #%(value)s; }\n' + \
			'.mlight-diff-d { color: #%(value)s; }'

		elif (line.startswith('base09')):
			csscode = '.mlight-const { color: #%(value)s; }'

		elif (line.startswith('base0a')):
			csscode = '.mlight-class { color: #%(value)s; }'

		elif (line.startswith('base0b')):
			csscode = \
			'.mlight-str { color: #%(value)s; }\n' + \
			'.mlight-diff-i { color: #%(value)s; }'

		elif (line.startswith('base0c')):
			csscode = '.mlight-esc { color: #%(value)s; }'

		elif (line.startswith('base0d')):
			csscode = '.mlight-func { color: #%(value)s; }'

		elif (line.startswith('base0e')):
			csscode = \
			'.mlight-kw { color: #%(value)s; }\n' + \
			'.mlight-diff-c { color: #%(value)s; }'

		elif (line.startswith('base0f')):
			csscode = '.mlight-embed { color: #%(value)s; }'

		else:
			add = False
			print('Unknown key! Line:', line)

		if add:
			style.write((csscode % {'value': line[9:line.rfind('"')]}) + '\n')
	style.close()


if __name__ == '__main__':

	try:
		if len(sys.argv) > 1:
			for scheme in range(1, len(sys.argv)):
				base16file = sys.argv[scheme]
				convert_scheme2css(base16file)
		else:
			base16file = input('Enter path to a Base16 color scheme file: ')
			convert_scheme2css(base16file)
	except Exception as ex:
		print(ex)
		input()

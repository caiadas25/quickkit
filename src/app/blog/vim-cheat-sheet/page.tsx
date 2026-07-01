import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vim Cheat Sheet — Every Command You Need | QuickKit",
  description:
    "Complete Vim cheat sheet with copy-paste commands. Navigation, editing, search, replace, macros, visual mode, and essential configuration. Updated 2026.",
  openGraph: {
    title: "Vim Cheat Sheet — QuickKit",
    description: "Every Vim command you use daily, with examples.",
    type: "article",
  },
};

export default function VimCheatSheetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Vim Cheat Sheet",
    description: "Complete Vim cheat sheet covering navigation, editing, search, macros, and configuration.",
    datePublished: "2026-07-01",
    author: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
    publisher: { "@type": "Organization", name: "QuickKit", url: "https://quickkit-nine.vercel.app" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-500">Vim Cheat Sheet</span>
        </nav>

        <article>
          <header className="mb-10">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3 inline-block">Developer Reference</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Vim Cheat Sheet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Every Vim command you need, from basic navigation to advanced macros. Copy-paste ready, organized by workflow.
            </p>
          </header>

          {/* Vim Modes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Vim Modes</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Normal mode (default) — navigate and edit
i       # Insert mode (before cursor)
a       # Insert mode (after cursor)
A       # Insert mode (end of line)
o       # New line below, insert mode
O       # New line above, insert mode
v       # Visual mode (character select)
V       # Visual line mode
Ctrl+v  # Visual block mode
R       # Replace mode
:       # Command-line mode
Esc     # Return to Normal mode from any mode`}</pre>
            </div>
          </section>

          {/* Navigation */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Navigation</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Character movement
h       # Move left
j       # Move down
k       # Move up
l       # Move right

# Word movement
w       # Next word (beginning)
e       # Next word (end)
b       # Previous word (beginning)
W/E/B   # WORD (whitespace-delimited)

# Line movement
0       # Beginning of line
^       # First non-blank character
$       # End of line
f{char} # Jump to char (forward)
t{char} # Jump to char before (forward)
F{char} # Jump to char (backward)
T{char} # Jump to char after (backward)
;       # Repeat f/t/F/T forward
,       # Repeat f/t/F/T backward

# Screen movement
H       # Top of screen
M       # Middle of screen
L       # Bottom of screen
Ctrl+d  # Half-page down
Ctrl+u  # Half-page up
Ctrl+f  # Full-page down
Ctrl+b  # Full-page up

# File movement
gg      # Go to first line
G       # Go to last line
:{n}    # Go to line n (e.g., :42)
%       # Jump to matching bracket

# Scroll (current line stays on screen)
zt      # Current line to top
zz      # Current line to middle
zb      # Current line to bottom`}</pre>
            </div>
          </section>

          {/* Editing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Editing</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Deleting
x       # Delete character under cursor
X       # Delete character before cursor
dw      # Delete word
dd      # Delete entire line
D       # Delete from cursor to end of line
d0      # Delete from cursor to start of line
dG      # Delete to end of file
dgg     # Delete to start of file
d{motion}  # Delete with motion (e.g., d5w)

# Changing (delete + enter insert mode)
cw      # Change word
cc      # Change entire line
C       # Change from cursor to end of line
ci"     # Change inside quotes
ci(     # Change inside parentheses
ci{     # Change inside braces
cit     # Change inside HTML tag

# Copy and paste
yy      # Copy (yank) entire line
yw      # Copy word
y{motion}  # Yank with motion (e.g., y$)
p       # Paste after cursor
P       # Paste before cursor

# Undo and redo
u       # Undo
Ctrl+r  # Redo
.       # Repeat last command

# Join lines
J       # Join current line with next
gJ      # Join without adding space

# Case toggle
~       # Toggle case of character under cursor
gUw     # Make word uppercase
guw     # Make word lowercase`}</pre>
            </div>
          </section>

          {/* Search and Replace */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Search &amp; Replace</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Search
/pattern    # Search forward
?pattern    # Search backward
n           # Next match (same direction)
N           # Next match (opposite direction)
*           # Search for word under cursor (forward)
#           # Search for word under cursor (backward)

# Replace (substitute)
:s/old/new/         # Replace first match on current line
:s/old/new/g        # Replace all on current line
:%s/old/new/g       # Replace all in file
:%s/old/new/gc      # Replace all with confirmation
:%s/old/new/gi      # Replace all (case insensitive)
:%s/old/new/ge      # Replace all (no error if not found)
:10,20s/old/new/g   # Replace in lines 10-20

# Find and replace patterns
:%s/\s\+$//g        # Remove trailing whitespace
:%s/\n\n\+/\r\r/g  # Reduce multiple blank lines to one
:%s/\<word\>/new/g  # Replace whole word only`}</pre>
            </div>
          </section>

          {/* Visual Mode */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Visual Mode</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Visual selection
v       # Character-wise visual mode
V       # Line-wise visual mode
Ctrl+v  # Block-wise visual mode

# In visual mode
d       # Delete selection
y       # Yank (copy) selection
c       # Change selection
>       # Indent selection
<       # Dedent selection
u       # Convert to lowercase
U       # Convert to uppercase
=       # Auto-indent selection
gu      # Make lowercase
gU      # Make uppercase
J       # Join selected lines
:       # Execute command on selection

# Block-wise operations (Ctrl+v)
I       # Insert text at start of block
A       # Append text at end of block
r{char} # Replace block with character
~       # Toggle case for block
d       # Delete block`}</pre>
            </div>
          </section>

          {/* Markers and Registers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Marks &amp; Registers</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Marks (bookmarks)
m{a-z}    # Set local mark (within file)
m{A-Z}    # Set global mark (across files)
'{mark}   # Jump to beginning of line with mark
\`{mark}   # Jump to exact position of mark
:marks    # List all marks

# Registers (clipboards)
"ay       # Yank into register a
"ap       # Paste from register a
"+y       # Yank to system clipboard
"+p       # Paste from system clipboard
:reg      # Show all registers
"0p       # Paste last yanked text (not deleted)

# Named registers
"0        # Last yanked text
"-        # Last deleted text
"a-z      # Named registers (user-defined)
"A-Z      # Append to register
"*        # Primary selection (X11)
"+        # System clipboard`}</pre>
            </div>
          </section>

          {/* Macros */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Macros</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Recording a macro
qa      # Start recording into register a
...     # Perform your edits
q       # Stop recording

# Playing back
@a      # Execute macro a
10@a    # Execute macro a 10 times
@@      # Repeat last macro

# Editing macros
:let @a='...'    # Set macro a programmatically
:diplay @a       # Show macro contents

# Pro tips
# Combine with motion for power:
10@a    # Run macro 10 times on 10 lines
:1,10normal! @a   # Run macro on lines 1-10

# Example: add semicolons to end of lines
qa      # Start recording
A;Esc   # Append semicolon, return to normal
q       # Stop recording
100@a   # Apply to next 100 lines`}</pre>
            </div>
          </section>

          {/* Splits and Windows */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Splits &amp; Windows</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Splitting
:sp filename    # Horizontal split
:vsp filename   # Vertical split
Ctrl+w s        # Horizontal split (current file)
Ctrl+w v        # Vertical split (current file)

# Navigation between splits
Ctrl+w h    # Move to left split
Ctrl+w j    # Move to lower split
Ctrl+w k    # Move to upper split
Ctrl+w l    # Move to right split
Ctrl+w w    # Cycle through splits

# Resizing
Ctrl+w =     # Equalize all splits
Ctrl+w _     # Maximize height
Ctrl+w |     # Maximize width
10 Ctrl+w +  # Increase height by 10
10 Ctrl+w -  # Decrease height by 10

# Closing
:q          # Close current split
:only       # Close all other splits
Ctrl+w o    # Close all other splits (alias)`}</pre>
            </div>
          </section>

          {/* Tabs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Tabs</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`# Tab management
:tabnew filename    # Open file in new tab
:tabn               # Next tab
:tabp               # Previous tab
gt                  # Next tab (normal mode)
gT                  # Previous tab (normal mode)
{n}gt               # Go to tab n
:tabclose           # Close current tab
:tabonly            # Close all other tabs
:tabdo command      # Run command on all tabs`}</pre>
            </div>
          </section>

          {/* Essential Config */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Essential .vimrc Config</h2>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre>{`" ~/.vimrc essentials

" Line numbers
set number
set relativenumber

" Search
set hlsearch
set incsearch
set ignorecase
set smartcase

" Indentation
set tabstop=4
set shiftwidth=4
set expandtab
set autoindent
set smartindent

" Visual
set cursorline
set showmatch
set signcolumn=yes
set scrolloff=8

" Files
set hidden
set autoread
set noswapfile
set nobackup

" Status line
set laststatus=2
set wildmenu
set wildmode=longest:full

" Key mappings
let mapleader=" "
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>e :Ex<CR>

" Split navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Clear search highlight
nnoremap <Esc> :nohlsearch<CR>`}</pre>
            </div>
          </section>

          {/* Quick Reference Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-700">Command</th>
                    <th className="text-left p-3 font-semibold text-slate-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:w</td><td className="p-3">Save file</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:q</td><td className="p-3">Quit file</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:wq</td><td className="p-3">Save and quit</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:x</td><td className="p-3">Save and quit (same as :wq)</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:q!</td><td className="p-3">Quit without saving</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:bn / :bp</td><td className="p-3">Next / previous buffer</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:e filename</td><td className="p-3">Open file</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:buffers</td><td className="p-3">List all buffers</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:set paste</td><td className="p-3">Enable paste mode</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3 font-mono">:set nopaste</td><td className="p-3">Disable paste mode</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Related */}
          <section className="mt-12 p-6 bg-slate-50 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Related Cheat Sheets</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/bash-cheat-sheet" className="text-indigo-600 hover:underline">Bash Cheat Sheet</Link> — Shell commands and scripting</li>
              <li><Link href="/blog/git-cheat-sheet" className="text-indigo-600 hover:underline">Git Cheat Sheet</Link> — Version control commands</li>
              <li><Link href="/blog/regex-cheat-sheet" className="text-indigo-600 hover:underline">Regex Cheat Sheet</Link> — Regular expressions</li>
              <li><Link href="/blog/linux-cheat-sheet" className="text-indigo-600 hover:underline">Linux Commands Cheat Sheet</Link> — Essential Linux commands</li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}

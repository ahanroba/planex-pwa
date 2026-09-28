const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

// 1. Remove imports
code = code.replace(/import \{ renderAiChatWidget \}.*\n?/, '');
code = code.replace(/import \{ aiService \}.*\n?/, '');

// 2. Remove render string
code = code.replace(/[ \t]*\$\{renderAiChatWidget\(state\.isAiChatOpen, state\.isAiTyping\)\}\n?/, '');

// 3. Remove activeModal fallback logic in renderApp
code = code.replace(/[ \t]*\} else if \(state\.activeModal === 'ai' \|\| state\.activeModal === 'aiModal' \|\| state\.activeModal === 'aiChat'\) \{[\s\S]*?state\.activeModal = null;\n/, '');

// 4. Remove E3 delegated logic (AI Assistant Modal & Widget Open Delegation)
code = code.replace(/[ \t]*\/\/ [^\n]*E3\. AI Assistant Modal[\s\S]*?\} catch \(_\) \{\}\n/, '');

// 5. Remove global handlers (window.openAiModal to window.triggerAiFlashcardMode)
code = code.replace(/[ \t]*\/\/ [^\n]*Global Handlers for AI Assistant[\s\S]*?window\.triggerAiFlashcardMode = function\(\) \{[\s\S]*?\}\n?\};\n/, '');

// 6. Remove Section 7 (Floating Chat Widget Event Binding)
code = code.replace(/[ \t]*\/\/ --- 7\. PlanEx AI Floating Chat Widget Event Binding ---[\s\S]*?\} catch \(aiErr\) \{[\s\S]*?\}\n/, '');

fs.writeFileSync('src/main.js', code, 'utf8');

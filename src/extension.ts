// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {
	commands,
	window
} from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		commands.registerCommand(
			'run-in-terminal.runInTerminal', () => {
					
					const wolframscriptTerminal = window.createTerminal(`WolframKernel`, "/Applications/Wolfram 2.app/Contents/MacOS/WolframKernel");
					wolframscriptTerminal.show();
					window.showInformationMessage('WolframKernel Launched');

			}
		)
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}

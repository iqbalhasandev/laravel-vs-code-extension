"use strict";

import * as vscode from "vscode";
import { CompletionProvider, Tags } from "..";
import AutocompleteResult from "../parser/AutocompleteResult";
import { getAssets } from "../repositories/asset";
import { wordMatchRegex } from "./../support/patterns";

export default class Asset implements CompletionProvider {
    tags(): Tags {
        return [
            {
                functions: ["asset"],
                paramIndex: 0,
            },
        ];
    }

    provideCompletionItems(
        result: AutocompleteResult,
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext,
    ): vscode.CompletionItem[] {
        return getAssets().items.map((file) => {
            let completeItem = new vscode.CompletionItem(
                file.path,
                vscode.CompletionItemKind.Constant,
            );

            completeItem.range = document.getWordRangeAtPosition(
                position,
                wordMatchRegex,
            );

            return completeItem;
        });
    }
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import { type EditorState, type LexicalEditor } from 'lexical';
import type { ToolbarConfig } from './plugins/toolbarTypes';
import { type OnImageUpload } from './plugins/OnImageUploadPlugin';
export declare type EditorProps = {
    isCollab?: boolean;
    isAutocomplete?: boolean;
    isMaxLength?: boolean;
    isCharLimit?: boolean;
    isCharLimitUtf8?: boolean;
    isRichText?: boolean;
    allowEmoji?: boolean;
    showTreeView?: boolean;
    showTableOfContents?: boolean;
    onChange?: (htmlJson: string, editorState: EditorState, editor: LexicalEditor) => void;
    onChangeMode?: 'html' | 'json';
    toolbarConfig?: ToolbarConfig;
    onUpload?: OnImageUpload;
    onGitLinkAppend?: (url: URL) => Promise<any>;
    handleAIData?: (data: string) => Promise<any>;
    onDataSend?: (img: File) => Promise<{
        url: string;
        id: number;
    }>;
    rootClassName?: string;
    containerClassName?: string;
    dummyMentionsDatas?: [{
        name: string;
        email: string;
    }];
    onGitLabPreviewFetch?: (url: string) => Promise<any>;
};
export default function Editor({ isCollab, isAutocomplete, isMaxLength, isCharLimit, isCharLimitUtf8, isRichText, allowEmoji, showTreeView, showTableOfContents, onChange, onChangeMode, onUpload, onDataSend, toolbarConfig, rootClassName, containerClassName, dummyMentionsDatas, handleAIData, onGitLabPreviewFetch, }: EditorProps): JSX.Element;

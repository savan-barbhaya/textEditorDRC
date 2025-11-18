/// <reference types="react" />
import type { DOMConversionMap, DOMExportOutput, EditorConfig, ElementFormatType, LexicalEditor, LexicalNode, NodeKey, Spread } from 'lexical';
import { DecoratorBlockNode, SerializedDecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';
import './GitLabNode.css';
export declare type SerializedGitlabNode = Spread<{
    type: 'gitlab';
    version: 1;
    owner: string;
    repo: string;
    id?: string;
    linkType: 'project' | 'branch' | 'merge_request' | 'issue' | 'commit' | 'pipeline';
    previewData?: any;
}, SerializedDecoratorBlockNode>;
export declare class GitlabNode extends DecoratorBlockNode {
    __owner: string;
    __repo: string;
    __id?: string;
    __linkType: 'project' | 'branch' | 'merge_request' | 'issue' | 'commit' | 'pipeline';
    __previewData?: any;
    static getType(): string;
    static clone(node: GitlabNode): GitlabNode;
    constructor(owner: string, repo: string, linkType: 'project' | 'branch' | 'merge_request' | 'issue' | 'commit' | 'pipeline', id?: string, format?: ElementFormatType, key?: NodeKey, previewData?: any);
    setPreviewData(data: any): void;
    getPreviewData(): any;
    static importJSON(serializedNode: SerializedGitlabNode): GitlabNode;
    exportJSON(): SerializedGitlabNode;
    exportDOM(): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    updateDOM(): false;
    decorate(_editor: LexicalEditor, config: EditorConfig): JSX.Element;
    isInline(): false;
}
export declare function $createGitlabNode({ owner, repo, id, linkType, previewData, }: {
    owner: string;
    repo: string;
    id?: string;
    linkType: 'project' | 'branch' | 'merge_request' | 'issue' | 'commit' | 'pipeline';
    previewData?: any;
}): GitlabNode;
export declare function $isGitlabNode(node: GitlabNode | LexicalNode | null | undefined): node is GitlabNode;

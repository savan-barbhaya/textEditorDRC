/// <reference types="react" />
import { LexicalCommand } from 'lexical';
export declare const INSERT_GITLAB_COMMAND: LexicalCommand<any>;
export declare type GitlabPluginProps = {
    onFetchPreview?: (url: string) => Promise<any>;
};
export declare type onGitLinkSend = (url: URL) => Promise<{
    url: string;
    id: number;
}>;
export default function GitlabPlugin({ onFetchPreview, }: GitlabPluginProps): JSX.Element | null;

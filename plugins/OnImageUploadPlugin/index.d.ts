export declare type OnImageUpload = (img: File, altText: string) => Promise<{
    url: string;
    id: number;
}>;
export declare type DragDropPasteProps = {
    onUpload?: OnImageUpload;
};
export default function OnImageUploadPlugin({ onUpload, }: DragDropPasteProps): null;

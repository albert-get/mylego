
import { UserProps } from './user'
import { TemplatesProps } from './templates'
import { EditorProps } from './editor'
import { GlobalStatus } from './global'

export interface GlobalDataProps {
    user: UserProps;
    templates: TemplatesProps;
    editor: EditorProps;
    global: GlobalStatus;
}
export interface ActionPayload {
    urlParams?: { [key: string]: any };
    data?: any;
    searchParams?: { [key: string]: any };
}
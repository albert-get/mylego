import { Module } from 'vuex'
import { RespListData, RespData } from './respTypes'
import { PageData } from './editor'
import { GlobalDataProps } from './index'

export type TemplateProps = Required<Omit<PageData, 'props' | 'setting'>>
export interface TemplatesProps {
    data: TemplateProps[];
    totalTemplates: number;
    works: TemplateProps[];
    totalWorks: number;
}
const templates: Module<TemplatesProps, GlobalDataProps> = {
    state: {
        data: [],
        totalTemplates: 0,
        works: [],
        totalWorks: 0
    }
}
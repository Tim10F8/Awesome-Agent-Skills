export interface Skill {
    id: string;
    name: string;
    description: string;
    category: SkillCategory;
    source: SkillSource;
    tags: string[];
    repoUrl?: string;
    docsUrl?: string;
    stars?: number;
    featured?: boolean;
}

export type SkillSource =
    | 'anthropic'
    | 'openai'
    | 'huggingface'
    | 'community';

export type SkillCategory =
    | 'document'
    | 'development'
    | 'data'
    | 'integration'
    | 'collaboration'
    | 'security'
    | 'creative'
    | 'research'
    | 'ai-core'
    | 'infrastructure'
    | 'fundamentals'
    | 'productivity';

export const SOURCE_LABELS: Record<SkillSource, string> = {
    anthropic: 'Anthropic',
    openai: 'OpenAI',
    huggingface: 'HuggingFace',
    community: 'Community',
};

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
    document: '文档处理',
    development: '开发工具',
    data: '数据分析',
    integration: '集成自动化',
    collaboration: '协作管理',
    security: '安全系统',
    creative: '创意设计',
    research: '高级研究',
    'ai-core': 'AI 核心',
    infrastructure: '基础设施',
    fundamentals: '编程基础',
    productivity: '生产力工具',
};

export const SOURCE_COLORS: Record<SkillSource, string> = {
    anthropic: '#d97706',
    openai: '#10b981',
    huggingface: '#fbbf24',
    community: '#8b5cf6',
};

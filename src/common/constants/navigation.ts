export type NavItemKey =
    | 'overview'
    | 'experience'
    | 'entrepreneurship'
    | 'personality'
    | 'qualifications'
    | 'resources'
    | 'contact'

export const NAV_ITEMS: Record<NavItemKey, { label: string; to: string }> = {
    overview: { label: 'Overview', to: '/' },
    experience: { label: 'Experience', to: '/experience' },
    entrepreneurship: { label: 'Entrepreneurship', to: '/entrepreneurship' },
    personality: { label: 'Personality', to: '/personality' },
    qualifications: { label: 'Qualifications', to: '/qualifications' },
    resources: { label: 'Resources', to: '/resources' },
    contact: { label: 'Contact Me', to: '/contact' },
}

export const NAV_KEYS = [
    'overview',
    'experience',
    'entrepreneurship',
    'personality',
    'qualifications',
    'resources',
    'contact',
] as const satisfies readonly NavItemKey[]

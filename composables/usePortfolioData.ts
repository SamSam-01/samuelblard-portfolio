import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import projectsFr from '~/content/projects.json';
import projectsEn from '~/content/projects.en.json';
import experiencesFr from '~/content/experiences.json';
import experiencesEn from '~/content/experiences.en.json';
import formationsFr from '~/content/formations.json';
import formationsEn from '~/content/formations.en.json';
import type { Project, Experience } from '~/types';

export const usePortfolioData = () => {
    const { locale } = useI18n();

    const projects = computed<Project[]>(() => {
        const data = locale.value === 'fr' ? projectsFr : projectsEn;
        return data.projects as Project[];
    });

    const experiences = computed<Experience[]>(() => {
        const data = locale.value === 'fr' ? experiencesFr : experiencesEn;
        return data.experiences as Experience[];
    });

    const formations = computed<Experience[]>(() => {
        const data = locale.value === 'fr' ? formationsFr : formationsEn;
        return data.formations as Experience[];
    });

    return {
        projects,
        experiences,
        formations,
    };
};

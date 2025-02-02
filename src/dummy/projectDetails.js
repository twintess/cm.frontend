export default [
    {
        projectId: 1,
        projectName: "APPS 1",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [
            {
                releaseId: 1,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 2,
                releaseNumber: '1.000.200.003',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 3,
                releaseNumber: '2.005.066.128',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 4,
                releaseNumber: '1.001.002.033',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 5,
                releaseNumber: '22.010.040.141',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 6,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 7,
                releaseNumber: '1.000.200.003',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 8,
                releaseNumber: '2.005.066.128',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 9,
                releaseNumber: '1.001.002.033',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 10,
                releaseNumber: '22.010.040.141',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            }
        ],
    },
    {
        projectId: 2,
        projectName: "APPS 2",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [
            {
                releaseId: 11,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
        ],
    },
    {
        projectId: 3,
        projectName: "APPS 3",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [
            {
                releaseId: 12,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 13,
                releaseNumber: '1.000.200.003',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
        ],
    },
    {
        projectId: 4,
        projectName: "APPS 4",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [
            {
                releaseId: 14,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 15,
                releaseNumber: '1.000.200.003',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 16,
                releaseNumber: '2.005.066.128',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 17,
                releaseNumber: '1.001.002.033',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
        ],
    },
    {
        projectId: 5,
        projectName: "APPS 5",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [
            {
                releaseId: 18,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 19,
                releaseNumber: '1.000.200.003',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 20,
                releaseNumber: '2.005.066.128',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 21,
                releaseNumber: '1.001.002.033',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 22,
                releaseNumber: '22.010.040.141',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
        ],
    },
    {
        projectId: 6,
        projectName: "APPS 6",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [
            {
                releaseId: 23,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 24,
                releaseNumber: '1.000.200.003',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 25,
                releaseNumber: '2.005.066.128',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 26,
                releaseNumber: '1.001.002.033',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 27,
                releaseNumber: '22.010.040.141',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
            {
                releaseId: 28,
                releaseNumber: '1.000.000.001',
                creationDate: new Date().toLocaleDateString(),
                modificationDate: new Date().toLocaleDateString(),
                descrption: 'testowy opis releasu w projekcie',
                lastDeployed: 'sd7f8ag1',
                svnCommit: '138755',
                gitlabCommit: 'p0b1gba8',
                repos: [
                    {
                        repoId: 1,
                        repoName: 'gitlab',
                        url: 'http://git1',
                    },
                    {
                        repoId: 2,
                        repoName: 'bitbucket',
                        url: 'http://git2'
                    }
                ],
                mgmts: [
                    {
                        id: 1,
                        mgmtName: 'JIRA',
                        url: 'http://jira',
                        mgmtProjectName: 'GIZ',
                        mgmtObjectName: 'GIZ-9411',
                        status: {
                            statusId: 1,
                            statusName: 'Wdrożony',
                            imgSrc: '/images/img1.jpg',
                        },
                    },
                    {
                        id: 2,
                        mgmtName: 'Confluence',
                        url: 'http://confluence',
                        mgmtProjectName: 'GIZ-c',
                        mgmtObjectName: 'GIZ-c 125151',
                        status: {
                            statusId: 2,
                            statusName: 'Anulowany',
                            imgSrc: '/images/img2.jpg',
                        },
                    }
                ],
                current_changes: [
                    {
                        change_id: 1,
                        change_name: 'serwer',
                        extension: 'java',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'klient',
                        extension: 'js',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 3,
                        change_name: 'baza',
                        extension: 'sql',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    },
                    {
                        change_id: 2,
                        change_name: 'ldap',
                        extension: 'ldif',
                        imgSrc: '/images/changes/fdga151j.jpg'
                    }
                ],
            },
        ],
    },
    {
        projectId: 7,
        projectName: "APPS 7",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [],
    },
    {
        projectId: 8,
        projectName: "APPS 8",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [],
    },
    {
        projectId: 9,
        projectName: "APPS 9",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [],
    },
    {
        projectId: 10,
        projectName: "APPS 10",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [],
    },
    {
        projectId: 11,
        projectName: "APPS 11",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [],
    },
    {
        projectId: 12,
        projectName: "APPS 12",
        currentPage: 1,
        allPages: 20,
        rowsPerPage: 10,
        releases: [],
    },
]
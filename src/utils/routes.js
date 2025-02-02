import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ReleaseDetailsView from '@/views/ReleaseDetailsView.vue'
import EditReleaseView from '@/views/EditReleaseView.vue'
import DeleteReleaseView from '@/views/DeleteReleaseView.vue'
import AdminPageView from '@/views/AdminPageView.vue'
import ReleaseListView from '@/views/ReleaseListView.vue'
import IntegrationDetailsView from '@/views/IntegrationDetailsView.vue'

export default [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/login',
        component: LoginView,
    },
    {
        path: '/project/:id',
        component: ReleaseListView
    },
    {
        path: '/release-details/:id',
        component: ReleaseDetailsView
    },
    {
        path: '/release-edit/:id',
        component: EditReleaseView
    },
    {
        path: '/release-delete/:id',
        component: DeleteReleaseView
    },
    {
        path: '/admin-page',
        component: AdminPageView
    },
    {
        path: '/integration/:id',
        component: IntegrationDetailsView
    }
]
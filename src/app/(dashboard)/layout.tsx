import { redirect } from 'next/navigation'

import { WidgetDashboard } from '@/widgets/dashboard'

const DashboardLayout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return <WidgetDashboard>{children}</WidgetDashboard>
}

export default DashboardLayout
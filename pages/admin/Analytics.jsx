function Analytics() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Analytics & Reports</h2>
                <p className="text-slate-600 mt-1">View website performance and statistics</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Traffic Overview</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">Total Visitors</span>
                            <span className="text-2xl font-bold text-slate-900">12,345</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">Page Views</span>
                            <span className="text-2xl font-bold text-slate-900">45,678</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">Bounce Rate</span>
                            <span className="text-2xl font-bold text-slate-900">32%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">Avg. Session Duration</span>
                            <span className="text-2xl font-bold text-slate-900">3:24</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Pages</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Home</span>
                            <span className="font-semibold text-slate-900">8,234 views</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Services</span>
                            <span className="font-semibold text-slate-900">5,678 views</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">About Us</span>
                            <span className="font-semibold text-slate-900">3,456 views</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Contact</span>
                            <span className="font-semibold text-slate-900">2,123 views</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Form Stats</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Total Submissions</span>
                            <span className="font-semibold text-slate-900">156</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">This Month</span>
                            <span className="font-semibold text-slate-900">42</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Response Rate</span>
                            <span className="font-semibold text-green-600">95%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Service Interest</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Enterprise Solutions</span>
                            <span className="font-semibold text-slate-900">45 inquiries</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Web Development</span>
                            <span className="font-semibold text-slate-900">38 inquiries</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Device Services</span>
                            <span className="font-semibold text-slate-900">32 inquiries</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Network Installation</span>
                            <span className="font-semibold text-slate-900">28 inquiries</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics


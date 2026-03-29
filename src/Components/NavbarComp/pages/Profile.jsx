import React from 'react';
import { useAuth } from "/src/context/AuthContext";
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { user } = useAuth();

    // Redirect to login if user tries to access profile while logged out
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Fallback PFP if none exists
    const pfpUrl = user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || user.email}&background=f59e0b&color=fff&size=128`;

    return (
        <div className="min-h-[calc(100-90px)] bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-amber-100 overflow-hidden">

                    {/* Cover Header */}
                    <div className="h-32 bg-gradient-to-r from-amber-400 to-orange-500"></div>

                    <div className="px-8 pb-8">
                        <div className="relative flex flex-col sm:flex-row items-center sm:items-end -mt-16 gap-6 mb-8">
                            {/* Profile Image */}
                            <img
                                src={pfpUrl}
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
                            />

                            <div className="text-center sm:text-left mb-2">
                                <h1 className="text-2xl font-extrabold text-gray-900">
                                    {user.displayName || "User Account"}
                                </h1>
                                <p className="text-gray-500 font-medium">{user.email}</p>
                            </div>
                        </div>

                        <hr className="border-gray-100 mb-8" />

                        {/* Account Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">User ID</p>
                                <h2 className="text-2xl font-extrabold text-gray-900">
                                    {user.displayName || "No Username Set"}
                                </h2>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Email Status</p>
                                <p className="text-2xl font-extrabold text-gray-900">
                                    {user.emailVerified ? "✅ Verified" : "⚠️ Unverified"}
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Account Created</p>
                                <p className="text-sm text-gray-700">
                                    {new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Last Sign In</p>
                                <p className="text-sm text-gray-700">
                                    {new Date(user.metadata.lastSignInTime).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-md active:scale-95">
                                Edit Profile
                            </button>
                            <button className="px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold rounded-xl transition-all">
                                Security Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
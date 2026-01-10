import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
  submittedAt: string;
}

const STORAGE_KEY = 'klinik_famili_appointments';

const getStoredAppointments = (): Appointment[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const AdminPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      setAppointments(getStoredAppointments());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'klinikfamili2024') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Date', 'Time', 'Service', 'Notes', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...appointments.map(apt => [
        apt.id,
        `"${apt.name}"`,
        apt.email,
        apt.phone,
        apt.date,
        apt.time || 'Any time',
        `"${apt.service}"`,
        `"${(apt.notes || '').replace(/"/g, '""')}"`,
        apt.submittedAt
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `appointments_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const deleteAppointment = (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      const updated = appointments.filter(apt => apt.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setAppointments(updated);
    }
  };

  const clearAllAppointments = () => {
    if (window.confirm('Are you sure you want to delete ALL appointments? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      setAppointments([]);
    }
  };

  const filteredAppointments = appointments
    .filter(apt => {
      if (filter === 'today') {
        return apt.date === new Date().toISOString().split('T')[0];
      }
      if (filter === 'upcoming') {
        return new Date(apt.date) >= new Date(new Date().toISOString().split('T')[0]);
      }
      if (filter === 'past') {
        return new Date(apt.date) < new Date(new Date().toISOString().split('T')[0]);
      }
      return true;
    })
    .filter(apt => {
      if (!searchTerm) return true;
      const search = searchTerm.toLowerCase();
      return (
        apt.name.toLowerCase().includes(search) ||
        apt.email.toLowerCase().includes(search) ||
        apt.phone.includes(search) ||
        apt.service.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-ttdi-green mb-2">Admin Login</h1>
            <p className="text-gray-500">Klinik Famili TTDI</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ttdi-green focus:border-transparent outline-none"
                placeholder="Enter admin password"
                autoFocus
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-ttdi-green text-white py-3 rounded-xl font-bold hover:bg-[#1a3d28] transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-ttdi-green hover:underline text-sm">
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-ttdi-green text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-serif">Appointment Dashboard</h1>
              <p className="text-green-200 text-sm">Klinik Famili TTDI</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-white/80 hover:text-white text-sm"
              >
                View Website
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Total Appointments</p>
            <p className="text-3xl font-bold text-ttdi-green">{appointments.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Today</p>
            <p className="text-3xl font-bold text-blue-600">
              {appointments.filter(a => a.date === new Date().toISOString().split('T')[0]).length}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Upcoming</p>
            <p className="text-3xl font-bold text-orange-500">
              {appointments.filter(a => new Date(a.date) > new Date()).length}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">This Week</p>
            <p className="text-3xl font-bold text-purple-600">
              {appointments.filter(a => {
                const aptDate = new Date(a.date);
                const today = new Date();
                const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                return aptDate >= today && aptDate <= weekFromNow;
              }).length}
            </p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search by name, email, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ttdi-green outline-none w-full sm:w-64"
              />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-ttdi-green outline-none"
              >
                <option value="all">All Appointments</option>
                <option value="today">Today</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToCSV}
                disabled={appointments.length === 0}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Export CSV
              </button>
              <button
                onClick={clearAllAppointments}
                disabled={appointments.length === 0}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-300 text-6xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No appointments found</p>
              <p className="text-gray-400 text-sm mt-1">
                {searchTerm || filter !== 'all' ? 'Try adjusting your filters' : 'Appointments will appear here when patients book'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Patient</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Appointment</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
                    <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900">{apt.name}</p>
                        {apt.notes && (
                          <p className="text-xs text-gray-400 mt-1 max-w-xs truncate" title={apt.notes}>
                            Note: {apt.notes}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{apt.email}</p>
                        <p className="text-sm text-gray-600">{apt.phone}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(apt.date).toLocaleDateString('en-MY', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                        </p>
                        <p className="text-sm text-gray-500">{apt.time || 'Any time'}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {apt.service}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(apt.submittedAt).toLocaleDateString('en-MY', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => deleteAppointment(apt.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Klinik Famili TTDI - Appointment Management System</p>
        </div>
      </main>
    </div>
  );
};

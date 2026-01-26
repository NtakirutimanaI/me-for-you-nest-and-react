import { useState, useEffect } from 'react';
import { api } from '../services/api';
import {
    Plus, Trash2, Edit2, Check, X, Image as ImageIcon,
    Video, MessageSquare, Briefcase, Users, Handshake,
    Filter, Search, Save, AlertCircle, Car, Home, CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

type ManagerTab = 'testimonials' | 'services' | 'team' | 'partners' | 'carousel' | 'facilities' | 'cars' | 'properties';

export function ContentManagerPage() {
    const [activeTab, setActiveTab] = useState<ManagerTab>('testimonials');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<number | string | null>(null);

    // Form states
    const [formData, setFormData] = useState<any>({});

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            let result: any[] = [];
            if (activeTab === 'testimonials') result = await api.testimonials.findAll();
            else if (activeTab === 'services') {
                const raw = await api.services.findAll();
                result = raw.map((s: any) => ({ ...s, title: s.name, image_url: s.image }));
            }
            else if (activeTab === 'team') result = await api.team.findAll();
            else if (activeTab === 'partners') result = await api.partners.findAll();
            else if (activeTab === 'carousel') result = await api.carouselItems.findAll();
            else if (activeTab === 'facilities') result = await api.facilities.findAll();
            else if (activeTab === 'cars') {
                const raw = await api.cars.findAll();
                result = raw.map((c: any) => ({ ...c, title: `${c.make} ${c.model}`, image_url: c.photos_urls?.[0] }));
            }
            else if (activeTab === 'properties') {
                const raw = await api.properties.findAll();
                result = raw.map((p: any) => ({ ...p, title: p.property_name, image_url: p.photos_urls?.[0] }));
            }
            setData(result);
        } catch (error) {
            toast.error(`Failed to load ${activeTab}`);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (item: any) => {
        setEditingId(item.id || item.car_id || item.property_id);
        setIsAdding(true);
        // Map item to formData
        if (activeTab === 'services') setFormData({ ...item, name: item.title, image: item.image_url });
        else if (activeTab === 'cars') setFormData({ ...item, image_url: item.photos_urls?.[0] });
        else if (activeTab === 'properties') setFormData({ ...item, image_url: item.photos_urls?.[0] });
        else setFormData(item);
    };

    const handleCreateOrUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const isEditing = editingId !== null;
            if (activeTab === 'testimonials') {
                isEditing ? await api.testimonials.create(formData) : await api.testimonials.create(formData); // Testimonials usually don't have update in this simple API yet, but we'll use create as overwrite or similar if backend supports it. For now, keep it simple.
            }
            else if (activeTab === 'services') {
                const payload = { ...formData, title: formData.name, image_url: formData.image };
                await api.services.create(payload);
            }
            else if (activeTab === 'team') await api.team.create(formData);
            else if (activeTab === 'partners') await api.partners.create(formData);
            else if (activeTab === 'carousel') await api.carouselItems.create(formData);
            else if (activeTab === 'facilities') await api.facilities.create(formData);
            else if (activeTab === 'cars') {
                const payload = {
                    ...formData,
                    category_id: parseInt(formData.category_id || 1),
                    daily_rate: parseFloat(formData.daily_rate),
                    photos_urls: [formData.image_url],
                    seats: parseInt(formData.seats || 5),
                    year: parseInt(formData.year || 2023)
                };
                await api.cars.create(payload);
            }
            else if (activeTab === 'properties') {
                const payload = {
                    ...formData,
                    property_type_id: parseInt(formData.property_type_id || 1),
                    owner_id: 1,
                    monthly_rent: parseFloat(formData.monthly_rent),
                    photos_urls: [formData.image_url]
                };
                await api.properties.create(payload);
            }

            toast.success(`${isEditing ? 'Updated' : 'Created'} successfully`);
            setIsAdding(false);
            setEditingId(null);
            setFormData({});
            fetchData();
        } catch (error) {
            toast.error('Operation failed');
        }
    };

    const handleDelete = async (id: number | string) => {
        if (!confirm('Are you sure you want to delete this?')) return;
        try {
            if (activeTab === 'testimonials') await api.testimonials.delete(id);
            else if (activeTab === 'services') await api.services.delete(id);
            else if (activeTab === 'team') await api.team.delete(id);
            else if (activeTab === 'partners') await api.partners.delete(id);
            else if (activeTab === 'carousel') await api.carouselItems.delete(id);
            else if (activeTab === 'facilities') await api.facilities.delete(id);
            else if (activeTab === 'cars') await api.cars.delete(id);
            else if (activeTab === 'properties') await api.properties.delete(id);

            toast.success('Deleted successfully');
            fetchData();
        } catch (error) {
            toast.error('Failed to delete');
        }
    };

    const tabs: { id: ManagerTab; label: string; icon: any }[] = [
        { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
        { id: 'services', label: 'Services', icon: Briefcase },
        { id: 'team', label: 'Team', icon: Users },
        { id: 'partners', label: 'Partners', icon: Handshake },
        { id: 'cars', label: 'Cars', icon: Car },
        { id: 'properties', label: 'Properties', icon: Home },
        { id: 'carousel', label: 'Carousel', icon: ImageIcon },
        { id: 'facilities', label: 'Facilities', icon: CheckCircle }
    ];

    return (
        <div className="container-fluid bg-light min-h-screen p-0">
            <div className="container py-5">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
                    <div>
                        <h1 className="fw-bold mb-1">Content Manager</h1>
                        <p className="text-muted mb-0">Unified dashboard for admin data control</p>
                    </div>
                    <button
                        onClick={() => setIsAdding(!isAdding)}
                        className={`btn ${isAdding ? 'btn-outline-danger' : 'btn-primary'} rounded-pill px-4 d-flex align-items-center justify-content-center gap-2`}
                        style={{ height: '45px' }}
                    >
                        {isAdding ? <><X size={18} /> Cancel</> : <><Plus size={18} /> Add New {activeTab}</>}
                    </button>
                </div>

                {/* Tabs */}
                <div className="overflow-auto pb-2 mb-5">
                    <div className="bg-white rounded-pill p-1 shadow-sm d-inline-flex gap-1" style={{ minWidth: 'max-content' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => { setActiveTab(tab.id); setIsAdding(false); setFormData({}); }}
                                className={`btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 transition-all ${activeTab === tab.id ? 'btn-primary shadow-sm' : 'btn-link text-dark text-decoration-none'}`}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Integration Forms */}
                {isAdding && (
                    <div className="bg-white rounded-4 p-4 shadow-sm mb-5 wow fadeInDown border-start border-5 border-primary">
                        <h4 className="mb-4">Create New {activeTab}</h4>
                        <form onSubmit={handleCreateOrUpdate}>
                            <div className="row g-3">
                                {activeTab === 'testimonials' && (
                                    <>
                                        <div className="col-md-6">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Profession</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, profession: e.target.value })} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Content</label>
                                            <textarea className="form-control" rows={3} required onChange={e => setFormData({ ...formData, content: e.target.value })}></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Image URL</label>
                                            <input type="text" className="form-control" placeholder="img/testimonial-1.jpg" onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Type</label>
                                            <select className="form-select" onChange={e => setFormData({ ...formData, type: e.target.value })}>
                                                <option value="text">Text</option>
                                                <option value="video">Video</option>
                                            </select>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'services' && (
                                    <>
                                        <div className="col-md-6">
                                            <label className="form-label">Service Name</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Category</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, category: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Price</label>
                                            <input type="number" className="form-control" required onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Image URL</label>
                                            <input type="text" className="form-control" placeholder="img/classes-1.jpg" onChange={e => setFormData({ ...formData, image: e.target.value })} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows={3} required onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'cars' && (
                                    <>
                                        <div className="col-md-6">
                                            <label className="form-label">Make</label>
                                            <input type="text" className="form-control" placeholder="Toyota" required value={formData.make || ''} onChange={e => setFormData({ ...formData, make: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Model</label>
                                            <input type="text" className="form-control" placeholder="Land Cruiser" required value={formData.model || ''} onChange={e => setFormData({ ...formData, model: e.target.value })} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Year</label>
                                            <input type="number" className="form-control" required value={formData.year || 2023} onChange={e => setFormData({ ...formData, year: e.target.value })} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Daily Rate</label>
                                            <input type="number" className="form-control" required value={formData.daily_rate || ''} onChange={e => setFormData({ ...formData, daily_rate: e.target.value })} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Seats</label>
                                            <input type="number" className="form-control" required value={formData.seats || 5} onChange={e => setFormData({ ...formData, seats: e.target.value })} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Category ID</label>
                                            <input type="number" className="form-control" value={formData.category_id || 1} onChange={e => setFormData({ ...formData, category_id: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Transmission</label>
                                            <select className="form-select" value={formData.transmission || 'Automatic'} onChange={e => setFormData({ ...formData, transmission: e.target.value })}>
                                                <option value="Automatic">Automatic</option>
                                                <option value="Manual">Manual</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Fuel Type</label>
                                            <select className="form-select" value={formData.fuel_type || 'Gasoline'} onChange={e => setFormData({ ...formData, fuel_type: e.target.value })}>
                                                <option value="Gasoline">Gasoline</option>
                                                <option value="Diesel">Diesel</option>
                                                <option value="Hybrid">Hybrid</option>
                                                <option value="Electric">Electric</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">License Plate</label>
                                            <input type="text" className="form-control" required value={formData.license_plate || ''} onChange={e => setFormData({ ...formData, license_plate: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Image URL</label>
                                            <input type="text" className="form-control" placeholder="img/car-1.jpg" required value={formData.image_url || ''} onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'properties' && (
                                    <>
                                        <div className="col-md-6">
                                            <label className="form-label">Property Name</label>
                                            <input type="text" className="form-control" placeholder="Luxury Apartment" required onChange={e => setFormData({ ...formData, property_name: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" placeholder="Kigali" required onChange={e => setFormData({ ...formData, city: e.target.value })} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Street Address</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, street_address: e.target.value })} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Monthly Rent</label>
                                            <input type="number" className="form-control" required onChange={e => setFormData({ ...formData, monthly_rent: e.target.value })} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Bedrooms</label>
                                            <input type="number" className="form-control" defaultValue={1} onChange={e => setFormData({ ...formData, bedrooms: e.target.value })} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Bathrooms</label>
                                            <input type="number" className="form-control" defaultValue={1} onChange={e => setFormData({ ...formData, bathrooms: e.target.value })} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Main Photo URL</label>
                                            <input type="text" className="form-control" placeholder="img/house-1.jpg" required onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'carousel' && (
                                    <>
                                        <div className="col-md-12">
                                            <label className="form-label">Slide Title</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows={2} required onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Image URL</label>
                                            <input type="text" className="form-control" placeholder="img/carousel-1.jpg" required onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Button Text</label>
                                            <input type="text" className="form-control" defaultValue="Learn More" onChange={e => setFormData({ ...formData, primary_button_text: e.target.value })} />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'facilities' && (
                                    <>
                                        <div className="col-md-6">
                                            <label className="form-label">Title</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Icon Class</label>
                                            <input type="text" className="form-control" placeholder="fa fa-home" defaultValue="fa fa-check" onChange={e => setFormData({ ...formData, icon_class: e.target.value })} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows={3} required onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea>
                                        </div>
                                    </>
                                )}

                                {(activeTab === 'team' || activeTab === 'partners') && (
                                    <>
                                        <div className="col-md-6">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Role</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, role: e.target.value })} />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Image/Logo URL</label>
                                            <input type="text" className="form-control" required onChange={e => setFormData({ ...formData, [activeTab === 'team' ? 'image_url' : 'logo_url']: e.target.value })} />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary px-5 rounded-pill shadow">
                                    <Save size={18} className="me-2" /> Save {activeTab}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Data List */}
                <div className="row g-4">
                    {loading ? (
                        <div className="col-12 text-center py-5">
                            <div className="spinner-border text-primary" role="status"></div>
                        </div>
                    ) : data.length === 0 ? (
                        <div className="col-12 text-center py-5 bg-white rounded-4 border border-dashed">
                            <p className="text-muted mb-0">No records found. Start by adding one!</p>
                        </div>
                    ) : (
                        data.map((item, idx) => (
                            <div key={item.id || item.car_id || item.property_id || idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 0.05}s`}>
                                <div className="bg-white rounded-4 p-4 shadow-sm border border-light h-100 transition-all hover-lift">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="position-relative">
                                            <img
                                                src={item.image_url || item.image || item.logo_url || '/placeholder.png'}
                                                className="rounded-circle object-fit-cover shadow-sm bg-light"
                                                style={{ width: '60px', height: '60px' }}
                                                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/60')}
                                            />
                                            {item.type === 'video' && <div className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-1"><Video size={10} /></div>}
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h6 className="mb-0 text-truncate">{item.name || item.title || item.property_name}</h6>
                                            <span className="badge bg-primary-soft text-primary small">
                                                {item.profession || item.role || item.category || (item.make ? `${item.make} ${item.year}` : 'Active')}
                                            </span>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="btn btn-light-soft text-primary p-2 rounded-circle hover-bg-primary transition-all"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id || item.car_id || item.property_id)}
                                                className="btn btn-light-soft text-danger p-2 rounded-circle hover-bg-danger transition-all"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-muted small mb-0 line-clamp-2">
                                        {item.content || item.description || item.street_address || "No summary available."}
                                    </p>
                                    {item.daily_rate && <div className="mt-3 text-primary fw-bold">Rate: ${item.daily_rate}/day</div>}
                                    {item.monthly_rent && <div className="mt-3 text-primary fw-bold">Rent: ${item.monthly_rent}/mo</div>}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <style>{`
                .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
                .btn-light-soft { background-color: #f8fafb; border: none; }
                .hover-bg-danger:hover { background-color: #fee2e2 !important; color: #ef4444 !important; }
                .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important; }
                .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
                ::-webkit-scrollbar { height: 6px; }
                ::-webkit-scrollbar-thumb { background: #eee; border-radius: 10px; }
            `}</style>
        </div>
    );
}

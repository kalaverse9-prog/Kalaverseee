import React, { useState, useRef } from 'react';
import { CommunityPost, UserProfile } from '../types';
import {
  Heart,
  UserPlus,
  UserCheck,
  Sparkles,
  ShieldCheck,
  Share2,
  PlusCircle,
  X,
  Award,
  CheckCircle,
  Upload,
  Image as ImageIcon,
  Trash2,
  Camera
} from 'lucide-react';
import { SupportedLanguage, getTranslations } from '../data/translations';
import {
  INITIAL_LOCALIZED_POSTS,
  getLocalizedCommunityPost,
  getLocalizedUI,
  ART_FORM_TRANSLATIONS,
  STATE_NAME_TRANSLATIONS
} from '../data/localizedContent';
import {
  LotusMotif,
  PeacockMotif,
  PaisleyMotif,
  MandalaRosette,
  ToranBorder,
  VineCreeperBorder,
  OrnateCorner,
  MandalaWatermark,
  SectionHeaderBanner
} from './CulturalMotifs';

interface CommunityFeedProps {
  currentUser: UserProfile;
  language?: SupportedLanguage;
}

export const CommunityFeed: React.FC<CommunityFeedProps> = ({
  currentUser,
  language = 'en'
}) => {
  const t = getTranslations(language);
  const ui = getLocalizedUI(language);
  const safeLang = (language in STATE_NAME_TRANSLATIONS ? language : 'en') as SupportedLanguage;

  const [posts, setPosts] = useState<CommunityPost[]>(() => {
    try {
      const saved = localStorage.getItem('kalaverse_community_posts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('kalaverse_community_posts', JSON.stringify(posts));
    } catch {
      // ignore
    }
  }, [posts]);
  const [likedPostIds, setLikedPostIds] = useState<string[]>([]);
  const [followedAuthors, setFollowedAuthors] = useState<string[]>(['Sunita Devi']);
  const [showPostModal, setShowPostModal] = useState<boolean>(false);
  const [selectedTagFilter, setSelectedTagFilter] = useState<string>('All');

  // New Post Form State with Device Image Upload
  const [newTitle, setNewTitle] = useState('');
  const [newArtForm, setNewArtForm] = useState('Madhubani / Mithila Painting');
  const [newDescription, setNewDescription] = useState('');
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tags = ['All', 'Madhubani', 'Warli', 'Pichwai', 'Pattachitra', 'Kalamkari', 'Tanjore'];

  const artOptions = [
    { id: 'Madhubani / Mithila Painting', key: 'Madhubani' },
    { id: 'Warli Folk Art', key: 'Warli' },
    { id: 'Pichwai & Miniature Painting', key: 'Pichwai' },
    { id: 'Pattachitra Painting', key: 'Pattachitra' },
    { id: 'Srikalahasti Kalamkari', key: 'Kalamkari' },
    { id: 'Thanjavur (Tanjore) Art', key: 'Tanjore' }
  ];

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImagePreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleToggleLike = (postId: string) => {
    if (likedPostIds.includes(postId)) {
      setLikedPostIds(likedPostIds.filter((id) => id !== postId));
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, likesCount: p.likesCount - 1 } : p))
      );
    } else {
      setLikedPostIds([...likedPostIds, postId]);
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, likesCount: p.likesCount + 1 } : p))
      );
    }
  };

  const handleToggleFollow = (authorName: string) => {
    if (followedAuthors.includes(authorName)) {
      setFollowedAuthors(followedAuthors.filter((name) => name !== authorName));
    } else {
      setFollowedAuthors([...followedAuthors, authorName]);
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: CommunityPost = {
      id: `post_${Date.now()}`,
      authorName: currentUser.name || 'Artisan Enthusiast',
      authorState: currentUser.state || 'India',
      isVerifiedArtisan: currentUser.plan === 'business',
      title: newTitle,
      description: newDescription,
      artForm: newArtForm,
      state: currentUser.state || 'India',
      imageUrl: uploadedImagePreview || undefined,
      likesCount: 1,
      tags: [`#${newArtForm.split(' ')[0]}`, '#KalaVerseCommunity']
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewDescription('');
    setUploadedImagePreview(null);
    setShowPostModal(false);
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  const filteredPosts = posts.filter((p) => {
    if (selectedTagFilter === 'All') return true;
    return p.artForm.toLowerCase().includes(selectedTagFilter.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <SectionHeaderBanner
        title={t.commTitle}
        subtitle={t.commSubtitle}
        tag="Peer Learning, Student Sketches & Artisan Gallery"
        themeColor="rose"
        icon={<PeacockMotif size={38} color="#FB7185" accentColor="#FEF08A" />}
        rightBadge={
          <button
            type="button"
            onClick={() => setShowPostModal(true)}
            className="px-5 py-2.5 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-[#1E1B4B] font-extrabold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105"
          >
            <LotusMotif size={16} color="#1E1B4B" secondaryColor="#E11D48" />
            <span>{t.commShareBtn}</span>
          </button>
        }
      />

      {/* Filter Chips Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-3 border-[#F59E0B] shadow-lg flex items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center gap-2">
          {tags.map((tag) => {
            const locTag = tag === 'All' ? t.commFilterAll : (ART_FORM_TRANSLATIONS[safeLang]?.[tag] || tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTagFilter(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  selectedTagFilter === tag
                    ? 'bg-[#1E3A8A] text-[#FFF8E7] shadow-md scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {locTag}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setShowPostModal(true)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-orange-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-sm shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{t.commShareBtn || 'Post Artwork'}</span>
        </button>
      </div>

      {/* Feed Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((rawPost) => {
            const post = getLocalizedCommunityPost(rawPost, language);
            const isLiked = likedPostIds.includes(post.id);
            const isFollowed = followedAuthors.includes(post.authorName);

            return (
              <div
                key={post.id}
                className="bg-white rounded-3xl border-3 border-[#F59E0B]/40 hover:border-[#1E3A8A] shadow-lg overflow-hidden flex flex-col justify-between transition-all group"
              >
                {/* Author Bar */}
                <div className="p-4 bg-gradient-to-r from-[#FFFDF5] to-[#FFFBEB] border-b border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#1E1B4B] text-white flex items-center justify-center font-extrabold text-sm border-2 border-[#F59E0B]">
                      {post.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-xs sm:text-sm text-[#1E3A8A] flex items-center gap-1.5">
                        <span>{post.authorName}</span>
                        {post.isVerifiedArtisan && (
                          <span className="w-4 h-4 rounded-full bg-amber-100 text-[#B45309] flex items-center justify-center text-[10px]" title="GI Master Artisan">
                            ✓
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-semibold">
                        📍 {post.authorState}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleFollow(post.authorName)}
                    className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-colors ${
                      isFollowed
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {isFollowed ? t.commFollowingBtn : t.commFollowBtn}
                  </button>
                </div>

                {/* Post Artwork Preview */}
                {post.imageUrl ? (
                  <div className="aspect-video w-full bg-stone-900 overflow-hidden relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-6 text-center border-b border-stone-100">
                    <MandalaRosette size={48} color="#F59E0B" accentColor="#DC2626" />
                  </div>
                )}

                {/* Post Content */}
                <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-[#B45309]">
                      {post.artForm}
                    </span>
                    <h3 className="font-display font-extrabold text-base text-[#1E3A8A]">
                      {post.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* Actions & Likes */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleToggleLike(post.id)}
                      className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
                        isLiked ? 'text-rose-600' : 'text-stone-500 hover:text-rose-600'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-600 text-rose-600' : ''}`} />
                      <span>{post.likesCount} {t.commAppreciations}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-stone-400 hover:text-red-600 p-1 rounded-lg hover:bg-red-50 transition-colors"
                        title="Delete post"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="text-[11px] text-stone-400 font-semibold">
                        KalaKaar Hub
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 sm:p-16 border-3 border-dashed border-[#F59E0B]/50 text-center flex flex-col items-center justify-center space-y-4 shadow-sm relative overflow-hidden">
          <MandalaRosette size={72} color="#F59E0B" accentColor="#E11D48" />
          <div className="max-w-md space-y-2">
            <h3 className="font-display font-extrabold text-xl text-[#1E3A8A]">
              Community Gallery Ready For Your Artworks
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              All previous posts have been cleared. Be the first to upload and share your authentic traditional art, practice sketches, and handmade creations with the community!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowPostModal(true)}
            className="px-6 py-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold flex items-center gap-2 shadow-md transition-all hover:scale-105"
          >
            <Camera className="w-4 h-4 text-[#FEF08A]" />
            <span>Upload Your Artwork</span>
          </button>
        </div>
      )}

      {/* Create Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] my-auto border-3 border-[#F59E0B] shadow-2xl flex flex-col relative overflow-hidden">
            <OrnateCorner position="top-left" color="#F59E0B" size={24} />
            <OrnateCorner position="top-right" color="#F59E0B" size={24} />

            <div className="shrink-0 flex items-center justify-between border-b border-stone-100 p-5 sm:p-6 pb-3 bg-white z-10">
              <h3 className="font-display font-extrabold text-lg text-[#1E3A8A] flex items-center gap-2">
                <LotusMotif size={20} color="#F59E0B" secondaryColor="#FB7185" />
                <span>{ui.shareArtworkTitle || 'Share Your Heritage Artwork'}</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowPostModal(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="overflow-y-auto p-5 sm:p-6 pt-3 space-y-4 flex-1 overscroll-contain">
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  {ui.artworkTitleLabel || 'Artwork Title'}
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="E.g., Sacred Peacock in Kadamba Grove"
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm font-semibold text-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  {ui.artStyleLabel || 'Traditional Art Style'}
                </label>
                <select
                  value={newArtForm}
                  onChange={(e) => setNewArtForm(e.target.value)}
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm font-semibold text-[#1E3A8A]"
                >
                  <option value="Madhubani / Mithila Painting">{ART_FORM_TRANSLATIONS[safeLang]?.['Madhubani'] || 'Madhubani / Mithila'}</option>
                  <option value="Warli Folk Art">{ART_FORM_TRANSLATIONS[safeLang]?.['Warli'] || 'Warli Tribal'}</option>
                  <option value="Pichwai & Miniature Painting">{ART_FORM_TRANSLATIONS[safeLang]?.['Pichwai'] || 'Pichwai & Miniature'}</option>
                  <option value="Pattachitra Painting">{ART_FORM_TRANSLATIONS[safeLang]?.['Pattachitra'] || 'Pattachitra'}</option>
                  <option value="Srikalahasti Kalamkari">{ART_FORM_TRANSLATIONS[safeLang]?.['Kalamkari'] || 'Kalamkari'}</option>
                  <option value="Thanjavur (Tanjore) Art">{ART_FORM_TRANSLATIONS[safeLang]?.['Tanjore'] || 'Tanjore Art'}</option>
                </select>
              </div>

              {/* Device Image Upload Dropzone */}
              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  {ui.uploadDevicePhoto || 'Upload Photo from Device (Optional)'}
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#F59E0B]/50 rounded-2xl p-4 text-center cursor-pointer bg-[#FFFDF5] hover:bg-amber-50 transition-colors flex flex-col items-center justify-center min-h-[120px]"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="hidden"
                  />

                  {uploadedImagePreview ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={uploadedImagePreview}
                        alt="Preview"
                        className="w-full h-full object-contain bg-stone-900"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveImage();
                        }}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full shadow hover:bg-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-xs text-stone-500">
                      <Camera className="w-6 h-6 text-[#F59E0B] mx-auto mb-1" />
                      <p className="font-bold text-[#1E3A8A]">{ui.clickSelectImage || 'Click to select image file from device'}</p>
                      <p className="text-[10px]">JPG, PNG, WEBP supported</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#1E3A8A] block mb-1">
                  {ui.techniqueDescription || 'Technique & Description'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Explain pigments used, motif lineage, or what you practiced..."
                  className="w-full bg-[#FFFBEB] border-2 border-[#F59E0B]/50 rounded-xl p-3 text-xs sm:text-sm text-[#2D2D2D]"
                />
              </div>

              <div className="flex items-center gap-3 pt-2 pb-1 sticky bottom-0 bg-white/95 backdrop-blur-xs">
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  className="flex-1 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-700 cursor-pointer transition-colors"
                >
                  {ui.cancelBtn || 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#1E3A8A] hover:bg-[#1E1B4B] text-[#FFF8E7] text-xs font-extrabold shadow-md cursor-pointer transition-colors"
                >
                  {ui.publishPostBtn || 'Publish Artwork'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

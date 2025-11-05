import React, { useState, useEffect } from 'react'
import { Search, Filter, Grid, List, Heart, Share2, Download, X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [favorites, setFavorites] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)

  // Sample gallery data with high-quality placeholder images
// Enhanced gallery data with better titles, tags & descriptions
const galleryItems = [
  {
    id: 1,
    title: "Icebreaker & Welcome Session",
    category: "Interaction Day",
    tags: ["event", "students", "icebreaker", "orientation", "fun"],
    url: "/iday/a.jpg",
    description: "Students enthusiastically participating in the opening icebreaker session, setting the tone for a vibrant Interaction Day."
  },
  {
    id: 2,
    title: "Team-Building Activities",
    category: "Interaction Day",
    tags: ["group", "teamwork", "engagement", "activities", "bonding"],
    url: "/iday/b.jpg",
    description: "Collaborative games and tasks designed to build teamwork, communication, and a sense of belonging among students."
  },
  {
    id: 3,
    title: "Cultural Performances",
    category: "Interaction Day",
    tags: ["performance", "stage", "celebration", "dance", "music"],
    url: "/iday/c.jpg",
    description: "A lively showcase of cultural performances including dance, music, and skits, adding color and energy to Interaction Day."
  },
  {
    id: 4,
    title: "Outdoor Fun & Exploration",
    category: "Interaction Day",
    tags: ["outdoor", "exploration", "sports", "adventure", "bonding"],
    url: "/iday/d.jpg",
    description: "Exciting outdoor activities and friendly competitions that encouraged teamwork, exploration, and bonding."
  },
  {
    id: 5,
    title: "Capturing Friendships",
    category: "Interaction Day",
    tags: ["friends", "memories", "happiness", "candid", "group-photo"],
    url: "/iday/e.jpg",
    description: "Heartwarming moments of new friendships and candid laughter, perfectly captured to create lasting memories."
  },
  {
    id: 6,
    title: "Moments of Laughter",
    category: "Interaction Day",
    tags: ["laughter", "fun", "togetherness", "smiles", "energy"],
    url: "/iday/f.jpg",
    description: "A vibrant atmosphere filled with joy and togetherness as students enjoyed every moment of the event."
  },
  {
    id: 7,
    title: "Interactive Games & Challenges",
    category: "Interaction Day",
    tags: ["games", "challenges", "competition", "participation", "fun"],
    url: "/iday/g.jpg",
    description: "Students actively engaged in fun challenges and games, sparking healthy competition and excitement."
  },
  {
    id: 8,
    title: "Unity & Celebration",
    category: "Interaction Day",
    tags: ["unity", "spirit", "celebration", "enthusiasm", "togetherness"],
    url: "/iday/h.jpg",
    description: "The day concluded with a spirited celebration, bringing everyone together in a display of unity and enthusiasm."
  },

  // FDP Event Section
  {
    id: 9,
    title: "FDP Inaugural Session",
    category: "FDP Event",
    tags: ["faculty", "development", "training", "opening-ceremony"],
    url: "/FDPEvent/a.jpg",
    description: "The Faculty Development Program (FDP) kicked off with a formal inaugural session, setting the agenda for the event."
  },
  {
    id: 10,
    title: "Expert Lectures & Insights",
    category: "FDP Event",
    tags: ["knowledge", "lectures", "training", "learning", "faculty"],
    url: "/FDPEvent/b.jpg",
    description: "Industry experts and academicians delivering insightful lectures and interactive sessions for faculty members."
  },
  {
    id: 11,
    title: "Hands-On Workshops",
    category: "FDP Event",
    tags: ["workshop", "training", "skill-building", "hands-on", "interactive"],
    url: "/FDPEvent/c.jpg",
    description: "Faculty actively participating in hands-on workshops designed to improve technical and pedagogical skills."
  },
  {
    id: 12,
    title: "Collaborative Discussions",
    category: "FDP Event",
    tags: ["discussion", "collaboration", "brainstorming", "networking"],
    url: "/FDPEvent/d.jpg",
    description: "Engaging in panel discussions and brainstorming sessions to exchange ideas and best practices."
  },
  {
    id: 13,
    title: "Technology Demonstrations",
    category: "FDP Event",
    tags: ["innovation", "demo", "technology", "learning", "tools"],
    url: "/FDPEvent/e.jpg",
    description: "Showcasing the latest teaching technologies and innovative tools to enhance the learning experience."
  },
  {
    id: 14,
    title: "Interactive Q&A Sessions",
    category: "FDP Event",
    tags: ["questions", "interactive", "faculty", "engagement"],
    url: "/FDPEvent/f.jpg",
    description: "An open Q&A session where participants engaged with speakers to clarify doubts and share perspectives."
  },
  {
    id: 15,
    title: "Group Activities & Networking",
    category: "FDP Event",
    tags: ["networking", "faculty", "activities", "collaboration"],
    url: "/FDPEvent/g.jpg",
    description: "Collaborative activities that encouraged networking and the sharing of academic experiences."
  },
  {
    id: 16,
    title: "Certification & Appreciation",
    category: "FDP Event",
    tags: ["certificates", "recognition", "appreciation", "awards"],
    url: "/FDPEvent/h.jpg",
    description: "Certificates of participation and appreciation awarded to faculty for their active involvement in the FDP."
  },
  {
    id: 17,
    title: "FDP Closing Ceremony",
    category: "FDP Event",
    tags: ["closing", "celebration", "team", "success"],
    url: "/FDPEvent/i.jpg",
    description: "The FDP concluded with a formal closing ceremony celebrating the successful completion of the event."
  },
  {
    id: 18,
    title: "Group Photo – FDP",
    category: "FDP Event",
    tags: ["group-photo", "memories", "team", "unity"],
    url: "/FDPEvent/j.jpg",
    description: "A memorable group photo marking the successful completion of the Faculty Development Program."
  },
  {
    id: 19,
    title: "Key Takeaways",
    category: "FDP Event",
    tags: ["takeaways", "learning", "insights", "impact"],
    url: "/FDPEvent/k.jpg",
    description: "Participants sharing their key learnings and takeaways from the week-long FDP sessions."
  },
 {
  id: 20,
  title: "Celebration of Knowledge",
  category: "FDP Event",
  tags: ["celebration", "knowledge", "growth", "achievement"],
  url: "/FDPEvent/l.jpg",
  description: "A final moment of joy and reflection, celebrating the spirit of continuous learning and growth."
},
{
  id: 21,
  title: "Post-Event Interaction – Networking 1",
  category: "FDP Event",
  tags: ["networking", "interaction", "informal", "faculty"],
  url: "/FDPEvent/m.jpg",
  description: "Faculty members engaged in the first round of informal networking, sharing ideas after the event."
},
{
  id: 22,
  title: "Post-Event Interaction – Networking 2",
  category: "FDP Event",
  tags: ["networking", "collaboration", "conversation", "faculty"],
  url: "/FDPEvent/n.jpg",
  description: "Small groups of faculty discussing key takeaways and exchanging thoughts informally."
},
{
  id: 23,
  title: "Post-Event Interaction – Group Conversations",
  category: "FDP Event",
  tags: ["group", "discussion", "ideas", "sharing"],
  url: "/FDPEvent/o.jpg",
  description: "Lively group conversations where participants reflected on the event and future opportunities."
},
{
  id: 24,
  title: "Post-Event Interaction – Smiles & Moments",
  category: "FDP Event",
  tags: ["joy", "candid", "smiles", "networking"],
  url: "/FDPEvent/p.jpg",
  description: "Candid moments of laughter and bonding as participants shared light-hearted stories."
},
{
  id: 25,
  title: "Post-Event Interaction – Experience Sharing",
  category: "FDP Event",
  tags: ["experience", "knowledge", "learning", "interaction"],
  url: "/FDPEvent/q.jpg",
  description: "Faculty members narrating their learning experiences and sharing best practices."
},
{
  id: 26,
  title: "Post-Event Interaction – Mentorship Moments",
  category: "FDP Event",
  tags: ["mentorship", "guidance", "faculty", "knowledge"],
  url: "/FDPEvent/r.jpg",
  description: "Senior faculty guiding junior members with tips and insights gained during the FDP."
},
{
  id: 27,
  title: "Post-Event Interaction – Networking Circle",
  category: "FDP Event",
  tags: ["circle", "interaction", "networking", "faculty"],
  url: "/FDPEvent/s.jpg",
  description: "Participants forming small networking circles to collaborate on future initiatives."
},
{
  id: 28,
  title: "Post-Event Interaction – Knowledge Exchange",
  category: "FDP Event",
  tags: ["exchange", "learning", "discussion", "faculty"],
  url: "/FDPEvent/t.jpg",
  description: "A knowledge exchange session where participants shared teaching strategies and tools."
},
{
  id: 29,
  title: "Post-Event Interaction – Group Photo",
  category: "FDP Event",
  tags: ["group-photo", "memory", "smile", "unity"],
  url: "/FDPEvent/u.jpg",
  description: "Capturing a memorable group photo during the post-event interaction session."
},
{
  id: 30,
  title: "Post-Event Interaction – Light Moments",
  category: "FDP Event",
  tags: ["relax", "fun", "smiles", "candid"],
  url: "/FDPEvent/v.jpg",
  description: "Faculty members sharing lighthearted moments and relaxing after an insightful event."
},
{
  id: 31,
  title: "Post-Event Interaction – Final Round",
  category: "FDP Event",
  tags: ["wrap-up", "networking", "faculty", "interaction"],
  url: "/FDPEvent/x.jpg",
  description: "Final round of networking where participants connected with peers and built collaborations."
},
{
  id: 32,
  title: "Post-Event Interaction – Closing Discussions",
  category: "FDP Event",
  tags: ["discussion", "wrap-up", "conclusion", "sharing"],
  url: "/FDPEvent/y.jpg",
  description: "Last discussions of the evening where key points and action items were summarized."
},
{
  id: 33,
  title: "Post-Event Interaction – Takeaways",
  category: "FDP Event",
  tags: ["key-points", "insights", "learning", "reflection"],
  url: "/FDPEvent/z.jpg",
  description: "Participants shared their most important takeaways and reflected on the overall experience."
},
{
  id: 34,
  title: "Post-Event Interaction – Extended Talks",
  category: "FDP Event",
  tags: ["long-talks", "exchange", "collaboration", "ideas"],
  url: "/FDPEvent/a1.jpg",
  description: "A few participants stayed back for extended conversations, discussing future collaborations."
},
{
  id: 35,
  title: "Post-Event Interaction – Networking Snap",
  category: "FDP Event",
  tags: ["snap", "group", "memory", "faculty"],
  url: "/FDPEvent/a2.jpg",
  description: "A snapshot of a lively networking moment, full of smiles and engagement."
},
{
  id: 36,
  title: "Post-Event Interaction – Knowledge Bonds",
  category: "FDP Event",
  tags: ["bonding", "ideas", "faculty", "growth"],
  url: "/FDPEvent/a3.jpg",
  description: "Bonds strengthened as participants exchanged knowledge and professional experiences."
},
{
  id: 37,
  title: "Post-Event Interaction – Final Goodbyes",
  category: "FDP Event",
  tags: ["goodbye", "farewell", "smiles", "closure"],
  url: "/FDPEvent/a4.jpg",
  description: "Waving goodbye and capturing the final moments before wrapping up the FDP event."
},
{
  id: 38,
  title: "Post-Event Interaction – Last Memories",
  category: "FDP Event",
  tags: ["memories", "closure", "faculty", "farewell"],
  url: "/FDPEvent/a5.jpg",
  description: "The last few captured memories of the day, marking the end of an enriching FDP experience."
},


];



  const categories = ['all', 'Interaction Day' , 'FDP Event' , 'Exhibition Day', 'Training Session' , 'Internal Discussion' , ]

  // Filter items based on search and category
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const openLightbox = (item) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    }
    setSelectedImage(filteredItems[newIndex])
  }

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
  //         <p className="text-white text-lg font-medium">Loading Gallery...</p>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    // <div className="min-h-screen bg-gradient-to-br mt-20 from-slate-900 via-blue-900 to-slate-900">
    <div className="min-h-screen bg-gradient-to-br mt-20 bg-slate-900">
      {/* Header */}
      <div className="backdrop-blur-md bg-black/20 border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex pt-2 flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enhanced Gallery
            </h1> */}
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full sm:w-64 transition-all duration-300"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex  bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 transition-all cursor-pointer duration-300 ${
                    viewMode === 'grid'  
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 transition-all cursor-pointer duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 cursor-pointer to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 cursor-pointer hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          </div>
          
          {/* Category Filter */}
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No images found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className={`transition-all duration-500 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-6'
          }`}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden' : 'block'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(item)}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-square rounded-2xl'
                }`}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      viewMode === 'grid' ? 'rounded-2xl' : ''
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    viewMode === 'grid' ? 'rounded-2xl' : ''
                  }`} />
                  
                  {/* Overlay Controls */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(item.id)
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                        favorites.has(item.id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-black/30 text-white hover:bg-black/50'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-md transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className={`${viewMode === 'list' ? 'flex-1 p-6' : 'p-4'}`}>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <h2 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300 mb-3">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {selectedImage.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full border border-purple-500/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleFavorite(selectedImage.id)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      favorites.has(selectedImage.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.has(selectedImage.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
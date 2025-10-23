import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 1,
        title: const Text(
          'facebook',
          style: TextStyle(
            color: Color(0xFF1877F2),
            fontSize: 28,
            fontWeight: FontWeight.bold,
          ),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.search, color: Colors.black),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.message, color: Colors.black),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        children: [
          // Story Section
          Container(
            height: 200,
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Text(
                    'Stories',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                Expanded(
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: 5,
                    itemBuilder: (context, index) {
                      return Container(
                        width: 120,
                        margin: const EdgeInsets.only(left: 16),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          color: Colors.grey[300],
                        ),
                        child: Stack(
                          children: [
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12),
                              child: Container(
                                width: double.infinity,
                                height: double.infinity,
                                color: Colors.blue[100 + (index * 100)],
                                child: const Icon(
                                  Icons.person,
                                  size: 40,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                            Positioned(
                              bottom: 8,
                              left: 8,
                              child: Text(
                                index == 0
                                    ? 'Your Story'
                                    : 'Friend ${index + 1}',
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),

          // Create Post Section
          Container(
            color: Colors.white,
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                const CircleAvatar(
                  radius: 20,
                  backgroundColor: Colors.grey,
                  child: Icon(Icons.person, color: Colors.white),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 12,
                    ),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey[300]!),
                      borderRadius: BorderRadius.circular(25),
                    ),
                    child: const Text(
                      "What's on your mind?",
                      style: TextStyle(color: Colors.grey),
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),

          // Posts
          ...List.generate(5, (index) => _buildPost(index)),
        ],
      ),
    );
  }

  Widget _buildPost(int index) {
    final List<String> names = [
      'John Doe',
      'Jane Smith',
      'Mike Johnson',
      'Sarah Wilson',
      'David Brown',
    ];

    final List<String> posts = [
      'Just had an amazing day at the beach! 🏖️',
      'Cooking dinner with family tonight 👨‍👩‍👧‍👦',
      'New project launch coming soon! Excited to share 🚀',
      'Beautiful sunset from my balcony 🌅',
      'Weekend hiking adventure was incredible! 🥾',
    ];

    return Container(
      color: Colors.white,
      margin: const EdgeInsets.only(bottom: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Post Header
          Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                CircleAvatar(
                  radius: 20,
                  backgroundColor: Colors.blue[200 + (index * 100)],
                  child: const Icon(Icons.person, color: Colors.white),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        names[index],
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                      Text(
                        '${index + 1}h',
                        style: TextStyle(color: Colors.grey[600], fontSize: 12),
                      ),
                    ],
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.more_horiz),
                  onPressed: () {},
                ),
              ],
            ),
          ),

          // Post Content
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Text(posts[index], style: const TextStyle(fontSize: 16)),
          ),
          const SizedBox(height: 12),

          // Post Image (placeholder)
          Container(
            height: 200,
            width: double.infinity,
            color: Colors.grey[200],
            child: Icon(Icons.image, size: 50, color: Colors.grey[400]),
          ),

          // Post Actions
          Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                _buildActionButton(
                  Icons.thumb_up,
                  'Like',
                  '${(index + 1) * 12}',
                ),
                const SizedBox(width: 20),
                _buildActionButton(
                  Icons.comment,
                  'Comment',
                  '${(index + 1) * 3}',
                ),
                const SizedBox(width: 20),
                _buildActionButton(Icons.share, 'Share', '${index + 1}'),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildActionButton(IconData icon, String label, String count) {
    return Row(
      children: [
        Icon(icon, size: 20, color: Colors.grey[600]),
        const SizedBox(width: 4),
        Text('$label $count', style: TextStyle(color: Colors.grey[600])),
      ],
    );
  }
}

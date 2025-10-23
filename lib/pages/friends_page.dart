import 'package:flutter/material.dart';

class FriendsPage extends StatelessWidget {
  const FriendsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 1,
        title: const Text(
          'Friends',
          style: TextStyle(
            color: Colors.black,
            fontSize: 24,
            fontWeight: FontWeight.bold,
          ),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.search, color: Colors.black),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        children: [
          // Friend Requests Section
          Container(
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Friend Requests',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(
                        'See All',
                        style: TextStyle(
                          color: Color(0xFF1877F2),
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                ),
                ...List.generate(3, (index) => _buildFriendRequest(index)),
              ],
            ),
          ),
          const SizedBox(height: 8),

          // People You May Know Section
          Container(
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Text(
                    'People You May Know',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                ...List.generate(5, (index) => _buildSuggestion(index)),
              ],
            ),
          ),
          const SizedBox(height: 8),

          // All Friends Section
          Container(
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'All Friends',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(
                        '${_friendsList.length} friends',
                        style: TextStyle(color: Colors.grey[600], fontSize: 14),
                      ),
                    ],
                  ),
                ),
                ...List.generate(
                  _friendsList.length,
                  (index) => _buildFriend(index),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFriendRequest(int index) {
    final List<String> names = [
      'Alex Thompson',
      'Maria Garcia',
      'Chris Wilson',
    ];

    final List<String> mutualFriends = [
      '5 mutual friends',
      '12 mutual friends',
      '3 mutual friends',
    ];

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        children: [
          CircleAvatar(
            radius: 30,
            backgroundColor: Colors.purple[200 + (index * 100)],
            child: const Icon(Icons.person, color: Colors.white, size: 30),
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
                  mutualFriends[index],
                  style: TextStyle(color: Colors.grey[600], fontSize: 14),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF1877F2),
                          foregroundColor: Colors.white,
                        ),
                        child: const Text('Confirm'),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () {},
                        child: const Text('Delete'),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSuggestion(int index) {
    final List<String> names = [
      'Emma Davis',
      'Ryan Miller',
      'Sophie Anderson',
      'Jake Taylor',
      'Olivia White',
    ];

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        children: [
          CircleAvatar(
            radius: 25,
            backgroundColor: Colors.green[200 + (index * 50)],
            child: const Icon(Icons.person, color: Colors.white, size: 25),
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
                  '${index + 2} mutual friends',
                  style: TextStyle(color: Colors.grey[600], fontSize: 14),
                ),
              ],
            ),
          ),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF1877F2),
              foregroundColor: Colors.white,
            ),
            child: const Text('Add Friend'),
          ),
        ],
      ),
    );
  }

  Widget _buildFriend(int index) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        children: [
          CircleAvatar(
            radius: 25,
            backgroundColor: Colors.blue[200 + (index * 50)],
            child: const Icon(Icons.person, color: Colors.white, size: 25),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              _friendsList[index],
              style: const TextStyle(fontWeight: FontWeight.w500, fontSize: 16),
            ),
          ),
          IconButton(icon: const Icon(Icons.more_horiz), onPressed: () {}),
        ],
      ),
    );
  }

  static const List<String> _friendsList = [
    'John Smith',
    'Emily Johnson',
    'Michael Brown',
    'Sarah Davis',
    'David Wilson',
    'Lisa Anderson',
    'James Taylor',
    'Jessica Miller',
    'Robert Garcia',
    'Ashley Martinez',
    'Christopher Lee',
    'Amanda Rodriguez',
    'Matthew Hernandez',
    'Jennifer Lopez',
    'Daniel Gonzalez',
  ];
}

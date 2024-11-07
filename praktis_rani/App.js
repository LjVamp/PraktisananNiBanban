import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Text, ProgressBar } from 'react-native-paper';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.overlay}>
        <Card.Content style={styles.profileHeader}>
          <Title style={styles.profileTitle}>Profile</Title>
        </Card.Content>

        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={185} // Increased avatar size
            source={require('./assets/catto.jpg')} // Updated to use local image
            style={styles.avatar}
          />
        </View>

        <Text style={styles.name}>LEDY JOY BANDIOLA</Text>
        <Paragraph style={styles.profession}>React Native Developer</Paragraph>

        <Button mode="contained" style={styles.followButton}>
          Follow
        </Button>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>30</Text>
            <Text style={styles.statLabel}>App</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Web</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>Works</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Text style={styles.actionText}>Like</Text>
          <Text style={styles.actionText}>Follow</Text>
          <Text style={styles.actionText}>Following</Text>
        </View>

        <Text style={styles.progressLabel}>Complete progress</Text>
        <View style={styles.progressContainer}>
          <ProgressBar progress={0.7} color="#6200ee" style={styles.progressBar} />
          <Text style={styles.progressPercentage}>70%</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    width: '30%',//90% kung sa mobile//
    height: '95%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 5,
  },
  profileHeader: {
    marginBottom: 30,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  followButton: {
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 15,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  actionText: {
    fontSize: 16,
    color: '#6200ee',
  },
  progressLabel: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    flex: 1,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#6200ee',
    fontWeight: 'bold',
    marginLeft: 10, // Space between progress bar and percentage text
  },
});

export default Profile;

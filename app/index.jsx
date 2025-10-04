import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { useFonts, Unna_400Regular, Unna_700Bold, } from '@expo-google-fonts/unna';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const SignInPage = () => {

  const router = useRouter();
  const handleLogin = () => {
    router.push('/tabs/home');
  }

  const [activeTab, setActiveTab] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    Unna_400Regular,
    Unna_700Bold,
  });

  if(!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.unnaFontBold]}>THREADS</Text>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab]} 
          onPress={() => { setActiveTab("signIn"); setEmail(""); setPassword(""); }}>
            <Text style={[styles.tabText, activeTab === "signIn" && styles.activeTabText]}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.tab]} 
          onPress={() => { setActiveTab("register"); setEmail(""); setPassword(""); }}>
            <Text style={[styles.tabText, activeTab === "register" && styles.activeTabText]}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          {activeTab === "signIn" ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="First Name"
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
              />
              <TextInput
                style={styles.input}
                placeholder="Create Username"
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
              />
              <TextInput
                style={styles.input}
                placeholder="Create Password"
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
              />
            </>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>{activeTab === "signIn" ? "Sign In" : "Sign Up"}</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>
            {activeTab === "signIn" ? "or join with" : null}
          </Text>

          {activeTab === "signIn" && (
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/images/facebook.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/images/apple.png')} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
          )}
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    backgroundColor: "white",
    flex: 1
  },

  header: {
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 75,
  },

  headerText: {
    color: "black",
    fontSize: 40,
  },

  unnaFontBold: {
    fontFamily: "Unna_700Bold",
  },

  unnaFontRegular:{
    fontFamily: "Unna_400Regular",
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  tab:{
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },

  tabText: {
    color: "#999",
    fontSize: 25,
    padding: 12,
    fontFamily: "Unna_400Regular",
    alignItems: "center",
    letterSpacing: 1,
  },

  activeTabText: {
    color: "black",
    borderBottomWidth: 4,
    borderBottomColor: "black",
    fontFamily: "Unna_700Bold",
  },

  formContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
  },

  input:{
    width: "100%",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    fontFamily: "Unna_400Regular",
    fontSize: 18,
    letterSpacing: 1,
    paddingVertical: 15,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 120,
    margin: 15,
    letterSpacing: 1,
  },

  buttonText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Unna_700Bold",
  },

  orText: {
    color: "#999",
    fontSize: 18,
    fontFamily: "Unna_400Regular",
    margin: 15,
    letterSpacing: 1,
  },

  socialButtonsContainer: {
    flexDirection: "row",
    margin: 15,
  },

  socialButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    marginHorizontal: 10,
  },

  socialIcon: {
    width: 30,
    height: 30,
  },
})

export default SignInPage
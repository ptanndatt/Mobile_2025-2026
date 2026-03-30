import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const exerciseList = [
    { id: 1, title: "Bài Tập 1", screen: "BaiTap1" },
    { id: 2, title: "Bài Tập 2", screen: "BaiTap2" },
    { id: 3, title: "Bài Tập 3", screen: "BaiTap3" },
    { id: 4, title: "Bài Tập 4", screen: "BaiTap4" },
    { id: 5, title: "Bài Tập 5", screen: "BaiTap5" },
    { id: 6, title: "Bài Tập 6", screen: "BaiTap6" },
    { id: 7, title: "Bài Tập 7", screen: "BaiTap7" },
    { id: 8, title: "Bài Tập 8", screen: "BaiTap8" },
    { id: 9, title: "Bài Tập 9", screen: "BaiTap9" },
    { id: 10, title: "Bài Tập 10", screen: "BaiTap10" },
    { id: 11, title: "Bài Tập 11:Redux Legacy", screen: "BaiTap11" },
    { id: 12, title: "Bài Tập 12:Redux Toolkit", screen: "BaiTap12" },
    { id: 13, title: "Bài Tập 13:QL Danh Sách", screen: "BaiTap13" },
    { id: 14, title: "Bài Tập 14:QL Người Dùng", screen: "BaiTap14" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.headerBox}>
        <Image
          source={require("../assets/images/logo_iuh.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>Đại học Công nghiệp TP.HCM</Text>
        <Text style={styles.appTitle}>Ứng dụng quản lý bài tập môn Mobile</Text>
      </View>

      <View style={styles.profileCard}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.avatar}
          resizeMode="cover"
        />

        <Text style={styles.studentName}>Phạm Tấn Đạt</Text>
        <Text style={styles.studentInfo}>MSSV: 21022271</Text>
        <Text style={styles.studentInfo}>Môn: Lập trình thiết bị di động</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Danh sách bài tập đã làm</Text>

        {exerciseList.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.exerciseButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View>
              <Text style={styles.exerciseTitle}>{item.title}</Text>
              <Text style={styles.exerciseSubtitle}>
                Nhấn để xem nội dung bài tập
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>IUH - Phạm Tấn Đạt - 21022271</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: "#F4F8FB",
  },
  headerBox: {
    backgroundColor: "#0B4F6C",
    paddingTop: 35,
    paddingBottom: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    elevation: 6,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  schoolName: {
    color: "#DCEEF8",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 6,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 18,
    marginTop: -10,
    borderRadius: 22,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "#118AB2",
    marginBottom: 14,
  },
  studentName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0B4F6C",
    marginBottom: 8,
  },
  studentInfo: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
    fontWeight: "500",
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0B4F6C",
    marginBottom: 16,
  },
  exerciseButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderLeftWidth: 6,
    borderLeftColor: "#06AED5",
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B1B1B",
    marginBottom: 4,
  },
  exerciseSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  arrow: {
    fontSize: 30,
    color: "#06AED5",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 12,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
});

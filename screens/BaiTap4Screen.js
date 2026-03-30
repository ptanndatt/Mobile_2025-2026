import { useEffect, useRef, useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const INITIAL_TIME = 25 * 60; // 25 phút = 1500 giây

export default function BaiTap4Screen() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      Alert.alert("Hoàn thành", "Đồng hồ đã đếm về 00:00");
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const mm = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const ss = secs < 10 ? `0${secs}` : `${secs}`;

    return `${mm}:${ss}`;
  };

  const handleStartPause = () => {
    if (timeLeft === 0) {
      setTimeLeft(INITIAL_TIME);
    }
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(INITIAL_TIME);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      <View style={styles.card}>
        <Text style={styles.title}>Đồng hồ đếm ngược</Text>
        <Text style={styles.subtitle}>useEffect + setInterval + cleanup function</Text>

        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        </View>

        <Text style={styles.statusText}>
          Trạng thái: {isRunning ? "Đang chạy" : "Đang dừng"}
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.startButton]}
            onPress={handleStartPause}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>
              {isRunning ? "Tạm dừng" : "Bắt đầu"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={handleReset}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>Đặt lại</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#1E293B",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F8FAFC",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#CBD5E1",
    marginBottom: 24,
    textAlign: "center",
  },
  timerBox: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 8,
    borderColor: "#38BDF8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#0F172A",
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 2,
  },
  statusText: {
    fontSize: 16,
    color: "#E2E8F0",
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 14,
  },
  button: {
    minWidth: 130,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#22C55E",
  },
  resetButton: {
    backgroundColor: "#EF4444",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
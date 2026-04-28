import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    if (form.email === "admin@r-intelligence.com" && form.password === "password123") {
      onLogin?.();
      navigate("/analyze");
    } else {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.root}>
      {/* Left Panel */}
      <div style={styles.left}>
        <div style={styles.leftContent}>
          <div style={styles.logo}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={styles.logoText}>R-Intelligence</span>
          </div>
          <div style={styles.leftBody}>
            <p style={styles.tagline}>Curating the Future<br />of Living.</p>
            <p style={styles.leftSub}>Make smarter sustainable decisions for a thriving ecosystem. Every choice counts towards a greener tomorrow.</p>
          </div>
          <div style={styles.testimonial}>
            <p style={styles.quote}>"The most sophisticated way to track impact is to weave it into the fabric of daily life."</p>
            <div style={styles.author}>
              <div style={styles.authorAvatar}>EA</div>
              <div>
                <p style={styles.authorName}>Environmental Advisory</p>
                <p style={styles.authorRole}>Circular Innovation</p>
              </div>
            </div>
          </div>
          <p style={styles.leftFooter}>© 2024 R-Intelligence Ecosystem</p>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.right}>
        <div style={styles.formContainer}>
          <div style={styles.formHeader}>
            <h2 style={styles.formTitle}>Welcome Back</h2>
            <p style={styles.formSub}>Login to continue your sustainability journey</p>
          </div>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>Email or Username</label>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@circula.com"
                style={styles.input}
                onFocus={e => e.target.style.borderColor = "#2d7a3a"}
                onBlur={e => e.target.style.borderColor = "#e2e8f0"}
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={{ ...styles.input, paddingRight: "44px" }}
                  onFocus={e => e.target.style.borderColor = "#2d7a3a"}
                  onBlur={e => e.target.style.borderColor = "#e2e8f0"}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>
            <div style={styles.rememberRow}>
              <label style={styles.checkLabel}>
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}
                  style={{ accentColor: "#2d7a3a", marginRight: "6px" }} />
                Remember me
              </label>
              <Link to="/forgot-password" style={styles.forgotLink}>Forgot Password?</Link>
            </div>
            {error && <p style={styles.error}>{error}</p>}
            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? "Signing in..." : "Login →"}
            </button>
            <div style={styles.divider}>
              <span style={styles.dividerLine} />
              <span style={styles.dividerText}>OR CONNECT WITH</span>
              <span style={styles.dividerLine} />
            </div>
            <div style={styles.socialRow}>
              <button type="button" style={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button type="button" style={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </button>
            </div>
            <p style={styles.signupText}>
              New here? <Link to="/signup" style={styles.signupLink}>Create an account</Link>
            </p>
          </form>
        </div>
        <div style={styles.rightFooter}>
          <span>Privacy</span>
          <span>Sustainability</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: { display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" },
  left: { width: "42%", background: "linear-gradient(160deg, #1a5c28 0%, #2d7a3a 40%, #1a3d20 100%)", display: "flex", flexDirection: "column", padding: "2rem", overflow: "hidden" },
  leftContent: { display: "flex", flexDirection: "column", height: "100%" },
  logo: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "auto" },
  logoText: { color: "white", fontWeight: "600", fontSize: "15px" },
  leftBody: { marginBottom: "2rem" },
  tagline: { color: "white", fontSize: "36px", fontWeight: "700", lineHeight: "1.2", margin: "0 0 1rem", letterSpacing: "-0.02em" },
  leftSub: { color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.6", margin: 0 },
  testimonial: { background: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "1.25rem", marginBottom: "2rem", border: "1px solid rgba(255,255,255,0.15)" },
  quote: { color: "rgba(255,255,255,0.9)", fontSize: "13px", fontStyle: "italic", lineHeight: "1.6", margin: "0 0 1rem" },
  author: { display: "flex", alignItems: "center", gap: "10px" },
  authorAvatar: { width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "11px", fontWeight: "600" },
  authorName: { color: "white", fontSize: "12px", fontWeight: "600", margin: "0 0 2px" },
  authorRole: { color: "rgba(255,255,255,0.6)", fontSize: "11px", margin: 0 },
  leftFooter: { color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0 },
  right: { flex: 1, background: "#fafaf8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", position: "relative" },
  formContainer: { width: "100%", maxWidth: "380px" },
  formHeader: { marginBottom: "2rem" },
  formTitle: { fontSize: "26px", fontWeight: "700", color: "#1a1a1a", margin: "0 0 6px", letterSpacing: "-0.02em" },
  formSub: { fontSize: "13px", color: "#888", margin: 0 },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  field: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "13px", fontWeight: "500", color: "#444" },
  input: { width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#1a1a1a", background: "white", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" },
  eyeBtn: { position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "14px", padding: "0" },
  rememberRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  checkLabel: { display: "flex", alignItems: "center", fontSize: "13px", color: "#555", cursor: "pointer" },
  forgotLink: { fontSize: "13px", color: "#2d7a3a", textDecoration: "none", fontWeight: "500" },
  error: { color: "#dc2626", fontSize: "13px", margin: "0", background: "#fef2f2", padding: "8px 12px", borderRadius: "6px", border: "1px solid #fecaca" },
  submitBtn: { width: "100%", padding: "12px", background: "linear-gradient(135deg, #2d7a3a, #1a5c28)", color: "white", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "600", cursor: "pointer" },
  divider: { display: "flex", alignItems: "center", gap: "10px" },
  dividerLine: { flex: 1, height: "1px", background: "#e2e8f0" },
  dividerText: { fontSize: "10px", color: "#aaa", letterSpacing: "0.08em", whiteSpace: "nowrap", fontWeight: "500" },
  socialRow: { display: "flex", gap: "10px" },
  socialBtn: { flex: 1, padding: "10px", border: "1.5px solid #e2e8f0", borderRadius: "8px", background: "white", cursor: "pointer", fontSize: "13px", fontWeight: "500", color: "#333", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" },
  signupText: { textAlign: "center", fontSize: "13px", color: "#888", margin: 0 },
  signupLink: { color: "#2d7a3a", fontWeight: "600", textDecoration: "none" },
  rightFooter: { position: "absolute", bottom: "1.5rem", right: "2rem", display: "flex", gap: "1.5rem", fontSize: "12px", color: "#aaa" },
};
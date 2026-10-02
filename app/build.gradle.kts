plugins {
  alias(libs.plugins.android.application)
}

android {
  namespace = "ir.planexapp.pwa"
  compileSdk = 35
  buildToolsVersion = "35.0.0"

  defaultConfig {
    applicationId = "ir.planexapp.pwa"
    minSdk = 24
    targetSdk = 35
    versionCode = 1
    versionName = "1.0"
  }

  signingConfigs {
    create("release") {
      storeFile = file("planex-release-key.jks")
      storePassword = "PlanExPass2026"
      keyAlias = "planex"
      keyPassword = "PlanExPass2026"
    }
  }

  buildTypes {
    release {
      signingConfig = signingConfigs.getByName("release")
      isMinifyEnabled = false
      proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
    }
    debug {
      // Use default debug signing (auto-generated) if debug.keystore is missing
    }
  }

  lint {
    checkReleaseBuilds = false
    abortOnError = false
  }

  compileOptions {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
  }

  buildFeatures {
    compose = false
    buildConfig = false
  }

  // Package the entire assets directory into the APK
  sourceSets {
    getByName("main") {
      assets.srcDirs("src/main/assets")
    }
  }
}

configurations.all {
  resolutionStrategy {
    exclude(group = "org.jetbrains.kotlin", module = "kotlin-stdlib-jdk7")
    exclude(group = "org.jetbrains.kotlin", module = "kotlin-stdlib-jdk8")
  }
}

dependencies {
  implementation("androidx.core:core-ktx:1.15.0")
  implementation("androidx.activity:activity-ktx:1.9.3")
  implementation("androidx.webkit:webkit:1.12.1")
}

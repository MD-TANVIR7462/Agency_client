export interface TeamMember {
    name: string;
    role: string;
    team: string[];
    image: string;
    bio: string;
    social: {
      linkedin: string;
      twitter: string;
      facebook: string;
      github: string;
    };
    skills: string[];
    status?: "active" | "inactive";
  }
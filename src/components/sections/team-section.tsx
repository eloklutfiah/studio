
import Image from 'next/image';
import { getTeam } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function TeamSection() {
  const teamMembers = getTeam();

  return (
    <section id="team" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Experts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The passionate individuals behind PadiPro's success, dedicated to sustainable and innovative agriculture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(
              (img) => img.id === member.imagePlaceholderId
            );
            return (
              <Card key={member.id} className="text-center">
                <CardHeader className="items-center">
                  <Avatar className="h-28 w-28 border-4 border-primary/20">
                    {memberImage && (
                      <AvatarImage
                        src={memberImage.imageUrl}
                        alt={member.name}
                        data-ai-hint={memberImage.imageHint}
                      />
                    )}
                    <AvatarFallback>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.title}</CardDescription>
                  <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

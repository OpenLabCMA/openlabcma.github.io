// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://openlabcma.github.io',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener'],
          test: (node) => {
            const href = node.properties?.href ?? '';
            return /^https?:\/\//.test(href) || /\.pdf($|[?#])/i.test(href);
          },
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: 'OpenLab',
      description:
        'Prototyping, teaching, and community space in the CMA Lab, HKUST(GZ)',
      customCss: ['./src/styles/openlab.css'],
      components: {
        Footer: './src/components/FooterWithReport.astro',
      },
      pagination: false,
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Equipment',
          items: [
            { label: 'Overview', link: '/equipment/' },
            {
              label: 'Textiles, Electronics & Printing',
              items: [
                { label: 'Brother V3LE embroidery', link: '/equipment/brother-v3le/' },
                { label: 'Butterfly JD1080Q sewing', link: '/equipment/butterfly-jd1080q/' },
                { label: 'Juki NX7 sewing', link: '/equipment/juki-nx7/' },
                { label: 'Baby Lock Victory serger', link: '/equipment/babylock-victory/' },
                { label: 'Janome coverstitch', link: '/equipment/janome-coverstitch/' },
                { label: 'Soldering station', link: '/equipment/soldering-station/' },
                { label: 'Canon imagePROGRAF', link: '/equipment/canon-imageprograf/' },
              ],
            },
            {
              label: '3D Printing',
              items: [
                { label: 'Prusa Mini', link: '/equipment/prusa-mini/' },
                { label: 'Bambu Lab', link: '/equipment/bambu-lab/' },
              ],
            },
            {
              label: 'Robotics',
              items: [
                { label: 'Unitree G1 humanoids', link: '/equipment/unitree-g1/' },
                { label: 'Unitree quadrupeds', link: '/equipment/unitree-quadruped/' },
                { label: 'Robot arms', link: '/equipment/robot-arms/' },
              ],
            },
            {
              label: 'Coming Soon',
              items: [
                { label: 'Laser cutter', link: '/equipment/laser-cutter/' },
                { label: 'Clay printer', link: '/equipment/clay-printer/' },
              ],
            },
          ],
        },
        { label: 'Projects', link: '/projects/' },
        { label: 'Become a User', link: '/join/' },
        { label: 'Links', link: '/links/' },
        { label: 'Report a problem', link: '/report/' },
      ],
    }),
  ],
});
